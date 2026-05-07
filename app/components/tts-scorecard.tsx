'use client'
import React, { useState } from 'react';

const TTSScorecard = () => {
  const [stage, setStage] = useState('landing'); // landing, quiz, results
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const questions = [
    // FREQUENCY TEST (40 points total)
    {
      id: 'q1',
      category: 'frequency',
      weight: 10,
      question: 'How many trades did you execute in the last 12 months?',
      options: [
        { label: 'Under 50 trades', value: 0 },
        { label: '51-200 trades', value: 40 },
        { label: '201-500 trades', value: 75 },
        { label: '500+ trades', value: 100 }
      ]
    },
    {
      id: 'q2',
      category: 'frequency',
      weight: 10,
      question: 'On average, how many days per week do you trade?',
      options: [
        { label: '1 day or less', value: 0 },
        { label: '2-3 days', value: 50 },
        { label: '4-5 days', value: 90 },
        { label: 'Daily (5+ days)', value: 100 }
      ]
    },
    {
      id: 'q3',
      category: 'frequency',
      weight: 12,
      question: "What's your typical holding period?",
      options: [
        { label: 'Weeks to months', value: 0 },
        { label: 'Several days', value: 30 },
        { label: 'Single day to few days', value: 70 },
        { label: 'Mostly intraday', value: 100 }
      ]
    },
    {
      id: 'q4',
      category: 'frequency',
      weight: 8,
      question: 'What percentage of trades are closed same-day vs held overnight?',
      options: [
        { label: 'Mostly held overnight', value: 0 },
        { label: '25-50% same-day', value: 40 },
        { label: '50-75% same-day', value: 70 },
        { label: '75%+ same-day', value: 100 }
      ]
    },

    // SUBSTANTIAL ACTIVITY TEST (20 points total)
    {
      id: 'q5',
      category: 'substantial',
      weight: 8,
      question: 'How many hours per week do you spend trading and market research?',
      options: [
        { label: 'Less than 10 hours', value: 0 },
        { label: '10-20 hours', value: 50 },
        { label: '20-30 hours', value: 80 },
        { label: '30+ hours (full-time)', value: 100 }
      ]
    },
    {
      id: 'q6',
      category: 'substantial',
      weight: 5,
      question: 'Do you have a dedicated workspace for trading?',
      options: [
        { label: 'No dedicated space', value: 0 },
        { label: 'Shared space', value: 40 },
        { label: 'Dedicated desk/area', value: 75 },
        { label: 'Dedicated office/room', value: 100 }
      ]
    },
    {
      id: 'q7',
      category: 'substantial',
      weight: 7,
      question: 'How do you track and analyze your trades?',
      options: [
        { label: 'No systematic tracking', value: 0 },
        { label: 'Basic spreadsheet', value: 50 },
        { label: 'Trading journal software', value: 80 },
        { label: 'Professional analytics platform', value: 100 }
      ]
    },

    // CONTINUITY/REGULARITY TEST (20 points total)
    {
      id: 'q8',
      category: 'continuity',
      weight: 8,
      question: 'How many months in the last year did you actively trade?',
      options: [
        { label: '1-3 months', value: 0 },
        { label: '4-6 months', value: 40 },
        { label: '7-9 months', value: 75 },
        { label: '10-12 months', value: 100 }
      ]
    },
    {
      id: 'q9',
      category: 'continuity',
      weight: 6,
      question: "What's your longest gap between trading activity?",
      options: [
        { label: 'More than 3 months', value: 0 },
        { label: '1-3 months', value: 40 },
        { label: 'Less than 1 month', value: 75 },
        { label: 'Trade weekly/continuously', value: 100 }
      ]
    },
    {
      id: 'q10',
      category: 'continuity',
      weight: 6,
      question: 'Do you have a documented trading plan or strategy?',
      options: [
        { label: 'No written plan', value: 0 },
        { label: 'Informal guidelines', value: 50 },
        { label: 'Written strategy', value: 85 },
        { label: 'Detailed documented plan', value: 100 }
      ]
    },

    // INCOME/LIVELIHOOD TEST (20 points total)
    {
      id: 'q11',
      category: 'income',
      weight: 6,
      question: 'What percentage of your total income comes from trading?',
      options: [
        { label: 'Less than 10%', value: 0 },
        { label: '10-25%', value: 40 },
        { label: '25-50%', value: 70 },
        { label: 'More than 50%', value: 100 }
      ]
    },
    {
      id: 'q12',
      category: 'income',
      weight: 5,
      question: 'What is your primary occupation?',
      options: [
        { label: 'Full-time employed (non-trading)', value: 0 },
        { label: 'Part-time employed', value: 40 },
        { label: 'Retired or self-employed', value: 70 },
        { label: 'Full-time trader only', value: 100 }
      ]
    },
    {
      id: 'q13',
      category: 'income',
      weight: 4,
      question: 'How many years have you earned trading profits?',
      options: [
        { label: 'No profitable years yet', value: 0 },
        { label: '1 year', value: 50 },
        { label: '2 years', value: 75 },
        { label: '3+ years consistently', value: 100 }
      ]
    },
    {
      id: 'q14',
      category: 'income',
      weight: 3,
      question: 'What is your approximate annual trading revenue (gross, not net)?',
      options: [
        { label: 'Under $50,000', value: 0 },
        { label: '$50,000-$100,000', value: 50 },
        { label: '$100,000-$250,000', value: 80 },
        { label: 'Over $250,000', value: 100 }
      ]
    },
    {
      id: 'q15',
      category: 'income',
      weight: 2,
      question: 'Do you pay for professional trading services?',
      options: [
        { label: 'No paid subscriptions', value: 0 },
        { label: 'Basic data feeds', value: 50 },
        { label: 'Multiple services/tools', value: 80 },
        { label: 'Professional-grade platform + data + research', value: 100 }
      ]
    }
  ];

  const calculateScore = () => {
    let totalScore = 0;
    let totalWeight = 0;

    questions.forEach(q => {
      const answer = answers[q.id];
      if (answer !== undefined) {
        totalScore += (answer / 100) * q.weight;
        totalWeight += q.weight;
      }
    });

    const finalScore = Math.round((totalScore / totalWeight) * 100);
    return finalScore;
  };

  const getScoreInterpretation = (score) => {
    if (score >= 81) {
      return {
        level: 'Clear TTS Trader',
        color: '#10b981',
        description: 'Your activity strongly indicates Trader Tax Status qualification. You demonstrate frequent, continuous trading activity with substantial time commitment.',
        recommendation: 'You should strongly consider filing as a trader under Schedule C and exploring the Mark-to-Market election for additional benefits.',
        auditRisk: 'Low - Your activity profile supports TTS classification',
        nextSteps: [
          'Ensure you have documentation for all trading activities',
          'Consider working with a CPA experienced in trader taxation',
          'Evaluate Mark-to-Market election for next tax year',
          'Maintain detailed trading records and business expense receipts'
        ]
      };
    } else if (score >= 61) {
      return {
        level: 'Strong Candidate',
        color: '#3b82f6',
        description: 'You likely qualify for Trader Tax Status. Your trading activity shows good frequency and commitment, though some areas could be strengthened.',
        recommendation: 'You have a solid case for TTS but should focus on documentation and consistency in weaker areas.',
        auditRisk: 'Low to Moderate - Ensure strong documentation',
        nextSteps: [
          'Identify gaps in your TTS qualification profile',
          'Build comprehensive documentation for audit protection',
          'Consider increasing trading frequency or hours if on the borderline',
          'Consult with a trader-focused tax professional'
        ]
      };
    } else if (score >= 41) {
      return {
        level: 'Borderline',
        color: '#f59e0b',
        description: 'Your TTS qualification is uncertain. You have some indicators but may not meet all IRS tests consistently.',
        recommendation: 'You could potentially qualify with improved documentation and increased activity, but the outcome is uncertain without additional evidence.',
        auditRisk: 'Moderate to High - Weak areas could be challenged',
        nextSteps: [
          'Significantly increase trading frequency and consistency',
          'Establish and document a formal trading business structure',
          'Consider whether TTS pursuit is worth the compliance burden',
          'If claiming TTS, expect to defend it with extensive documentation'
        ]
      };
    } else {
      return {
        level: 'Low Likelihood',
        color: '#ef4444',
        description: 'Based on your responses, you likely do not meet IRS requirements for Trader Tax Status. Your activity appears more consistent with investor classification.',
        recommendation: 'Continue reporting on Schedule D as an investor. TTS may not provide significant benefits given your current activity level.',
        auditRisk: 'High if you claim TTS - Activity does not support classification',
        nextSteps: [
          'Focus on building trading consistency and frequency if TTS is a goal',
          'Explore investor tax strategies (tax-loss harvesting, qualified dividends)',
          'Consider if increasing trading activity to TTS levels aligns with your goals',
          'Reassess annually as your trading evolves'
        ]
      };
    }
  };

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const finalScore = calculateScore();
      setScore(finalScore);
      setStage('results');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQ = questions[currentQuestion];
  const hasAnswer = answers[currentQ?.id] !== undefined;

  if (stage === 'landing') {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        fontFamily: "'DM Sans', -apple-system, sans-serif",
        color: '#f1f5f9'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '80px 24px',
        }}>
          {/* Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '80px'
          }}>
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              padding: '8px 20px',
              borderRadius: '24px',
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              marginBottom: '24px',
              color: '#fff'
            }}>
              Free Assessment
            </div>
            
            <h1 style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: '700',
              lineHeight: '1.1',
              marginBottom: '24px',
              background: 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: "'Merriweather', serif"
            }}>
              Do You Qualify for<br/>Trader Tax Status?
            </h1>
            
            <p style={{
              fontSize: '20px',
              lineHeight: '1.6',
              color: '#94a3b8',
              maxWidth: '600px',
              margin: '0 auto 40px'
            }}>
              Find out in 5 minutes if you meet IRS requirements for TTS — and potentially unlock thousands in tax deductions.
            </p>

            <button
              onClick={() => setStage('quiz')}
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: '#fff',
                border: 'none',
                padding: '18px 48px',
                fontSize: '18px',
                fontWeight: '600',
                borderRadius: '12px',
                cursor: 'pointer',
                boxShadow: '0 10px 40px rgba(16, 185, 129, 0.3)',
                transition: 'all 0.3s ease',
                fontFamily: "'DM Sans', sans-serif"
              }}
              onMouseEnter={e => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 15px 50px rgba(16, 185, 129, 0.4)';
              }}
              onMouseLeave={e => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 10px 40px rgba(16, 185, 129, 0.3)';
              }}
            >
              Start Free Assessment →
            </button>
          </div>

          {/* Value Props */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
            marginBottom: '60px'
          }}>
            {[
              {
                title: 'IRS-Aligned Scoring',
                desc: 'Based on actual IRS tests for trader classification'
              },
              {
                title: 'Instant Results',
                desc: 'Get your qualification score immediately after completion'
              },
              {
                title: '100% Free',
                desc: 'No credit card, no signup — just accurate assessment'
              }
            ].map((item, i) => (
              <div key={i} style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '32px 24px',
                backdropFilter: 'blur(10px)'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#f1f5f9'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: '#94a3b8',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* What You'll Learn */}
          <div style={{
            background: 'rgba(16, 185, 129, 0.05)',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            borderRadius: '16px',
            padding: '40px',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              marginBottom: '24px',
              color: '#10b981'
            }}>
              What You'll Discover
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              textAlign: 'left'
            }}>
              {[
                'Your TTS qualification score (0-100)',
                'Strength assessment across 4 IRS tests',
                'Specific areas that need improvement',
                'Audit risk evaluation for your profile',
                'Next steps and recommendations'
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}>
                  <span style={{
                    color: '#10b981',
                    fontSize: '20px',
                    flexShrink: 0
                  }}>✓</span>
                  <span style={{
                    fontSize: '15px',
                    color: '#cbd5e1',
                    lineHeight: '1.5'
                  }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div style={{
            textAlign: 'center',
            marginTop: '60px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <p style={{
              fontSize: '14px',
              color: '#64748b',
              margin: 0
            }}>
              Powered by <strong style={{ color: '#10b981' }}>YASLEA LLC</strong> — Trader Tax Experts
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (stage === 'quiz') {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        fontFamily: "'DM Sans', -apple-system, sans-serif",
        color: '#f1f5f9',
        padding: '40px 24px'
      }}>
        <div style={{
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          {/* Progress Bar */}
          <div style={{
            marginBottom: '40px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '12px'
            }}>
              <span style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#94a3b8'
              }}>
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#10b981'
              }}>
                {Math.round(progress)}% Complete
              </span>
            </div>
            <div style={{
              width: '100%',
              height: '8px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${progress}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #10b981 0%, #059669 100%)',
                transition: 'width 0.3s ease',
                borderRadius: '8px'
              }} />
            </div>
          </div>

          {/* Question Card */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            padding: '48px',
            backdropFilter: 'blur(10px)',
            marginBottom: '32px'
          }}>
            <div style={{
              fontSize: '12px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: '#10b981',
              marginBottom: '16px'
            }}>
              {currentQ.category.charAt(0).toUpperCase() + currentQ.category.slice(1)} Test
            </div>
            
            <h2 style={{
              fontSize: '28px',
              fontWeight: '600',
              lineHeight: '1.3',
              marginBottom: '32px',
              color: '#f1f5f9'
            }}>
              {currentQ.question}
            </h2>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {currentQ.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(currentQ.id, option.value)}
                  style={{
                    background: answers[currentQ.id] === option.value 
                      ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                      : 'rgba(255, 255, 255, 0.05)',
                    border: answers[currentQ.id] === option.value
                      ? '2px solid #10b981'
                      : '2px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '20px 24px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    color: '#f1f5f9',
                    fontSize: '16px',
                    fontWeight: '500',
                    fontFamily: "'DM Sans', sans-serif"
                  }}
                  onMouseEnter={e => {
                    if (answers[currentQ.id] !== option.value) {
                      e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                      e.target.style.borderColor = 'rgba(16, 185, 129, 0.3)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (answers[currentQ.id] !== option.value) {
                      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    }
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              style={{
                background: 'transparent',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                color: currentQuestion === 0 ? '#475569' : '#cbd5e1',
                padding: '14px 32px',
                fontSize: '16px',
                fontWeight: '600',
                borderRadius: '12px',
                cursor: currentQuestion === 0 ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: "'DM Sans', sans-serif"
              }}
            >
              ← Previous
            </button>

            <button
              onClick={handleNext}
              disabled={!hasAnswer}
              style={{
                background: hasAnswer 
                  ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                  : 'rgba(255, 255, 255, 0.1)',
                color: hasAnswer ? '#fff' : '#475569',
                border: 'none',
                padding: '14px 32px',
                fontSize: '16px',
                fontWeight: '600',
                borderRadius: '12px',
                cursor: hasAnswer ? 'pointer' : 'not-allowed',
                transition: 'all 0.2s ease',
                fontFamily: "'DM Sans', sans-serif"
              }}
            >
              {currentQuestion === questions.length - 1 ? 'See Results →' : 'Next →'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (stage === 'results') {
    const interpretation = getScoreInterpretation(score);
    
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        fontFamily: "'DM Sans', -apple-system, sans-serif",
        color: '#f1f5f9',
        padding: '60px 24px'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {/* Score Display */}
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <div style={{
              fontSize: '14px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: '#94a3b8',
              marginBottom: '24px'
            }}>
              Your TTS Qualification Score
            </div>

            <div style={{
              position: 'relative',
              display: 'inline-block',
              marginBottom: '32px'
            }}>
              <svg width="200" height="200" style={{ transform: 'rotate(-90deg)' }}>
                {/* Background circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="85"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="12"
                />
                {/* Score arc */}
                <circle
                  cx="100"
                  cy="100"
                  r="85"
                  fill="none"
                  stroke={interpretation.color}
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray={`${(score / 100) * 534} 534`}
                  style={{
                    transition: 'stroke-dasharray 1s ease'
                  }}
                />
              </svg>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '56px',
                  fontWeight: '700',
                  color: interpretation.color,
                  lineHeight: '1',
                  fontFamily: "'Merriweather', serif"
                }}>
                  {score}
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#94a3b8',
                  marginTop: '4px'
                }}>
                  / 100
                </div>
              </div>
            </div>

            <h1 style={{
              fontSize: '36px',
              fontWeight: '700',
              marginBottom: '16px',
              color: interpretation.color,
              fontFamily: "'Merriweather', serif"
            }}>
              {interpretation.level}
            </h1>

            <p style={{
              fontSize: '18px',
              lineHeight: '1.6',
              color: '#cbd5e1',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              {interpretation.description}
            </p>
          </div>

          {/* Details */}
          <div style={{
            display: 'grid',
            gap: '24px',
            marginBottom: '40px'
          }}>
            {/* Recommendation */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '32px',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '12px',
                color: '#10b981'
              }}>
                Recommendation
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.6',
                color: '#cbd5e1',
                margin: 0
              }}>
                {interpretation.recommendation}
              </p>
            </div>

            {/* Audit Risk */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '32px',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '12px',
                color: '#f59e0b'
              }}>
                Audit Risk Assessment
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.6',
                color: '#cbd5e1',
                margin: 0
              }}>
                {interpretation.auditRisk}
              </p>
            </div>

            {/* Next Steps */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '32px',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '20px',
                color: '#3b82f6'
              }}>
                Recommended Next Steps
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                {interpretation.nextSteps.map((step, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}>
                    <span style={{
                      color: '#10b981',
                      fontSize: '18px',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}>
                      {idx + 1}.
                    </span>
                    <span style={{
                      fontSize: '15px',
                      color: '#cbd5e1',
                      lineHeight: '1.6'
                    }}>
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA for Paid Report (Placeholder) */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%)',
            border: '2px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '16px',
            padding: '40px',
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '600',
              marginBottom: '16px',
              color: '#10b981'
            }}>
              Want a Detailed Analysis?
            </h3>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#cbd5e1',
              marginBottom: '24px',
              maxWidth: '500px',
              margin: '0 auto 24px'
            }}>
              Get a comprehensive report with your specific evidence gaps, documentation checklists, MTM election guidance, and Schedule C templates.
            </p>
            <button
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#94a3b8',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                padding: '14px 32px',
                fontSize: '16px',
                fontWeight: '600',
                borderRadius: '12px',
                cursor: 'not-allowed',
                fontFamily: "'DM Sans', sans-serif"
              }}
            >
              Coming Soon - Detailed Report ($49)
            </button>
          </div>

          {/* Retake */}
          <div style={{
            textAlign: 'center'
          }}>
            <button
              onClick={() => {
                setStage('landing');
                setCurrentQuestion(0);
                setAnswers({});
                setScore(null);
              }}
              style={{
                background: 'transparent',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                color: '#cbd5e1',
                padding: '14px 32px',
                fontSize: '16px',
                fontWeight: '600',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: "'DM Sans', sans-serif"
              }}
            >
              ← Retake Assessment
            </button>
          </div>

          {/* Footer */}
          <div style={{
            textAlign: 'center',
            marginTop: '60px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <p style={{
              fontSize: '14px',
              color: '#64748b',
              margin: 0
            }}>
              Powered by <strong style={{ color: '#10b981' }}>YASLEA LLC</strong> — Trader Tax Experts
            </p>
            <p style={{
              fontSize: '12px',
              color: '#475569',
              marginTop: '12px'
            }}>
              Disclaimer: This assessment is for informational purposes only and does not constitute tax advice. 
              Consult with a qualified tax professional for specific guidance.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default TTSScorecard;
