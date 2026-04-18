import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAssessmentTasks } from '../content/tasks'
import { generateAssessmentResult } from '../scoring'
import {
  getCapabilityLabels,
  getResultUiCopy,
  localizeAssessmentResult
} from '../scoring/resultDerivation'
import { useAssessment } from '../state/AssessmentContext'
import { useLocale } from '../state/LocaleContext'

export const ResultPage = () => {
  const navigate = useNavigate()
  const { locale } = useLocale()
  const copy = getResultUiCopy(locale)
  const capabilityLabels = getCapabilityLabels(locale)
  const tasks = getAssessmentTasks(locale)
  const { session, resetAssessment, setResult } = useAssessment()

  useEffect(() => {
    if (session.isComplete && !session.result && Object.keys(session.answers).length > 0) {
      const recoveredResult = generateAssessmentResult(tasks, session.answers)
      setResult(recoveredResult)
    }
  }, [session.answers, session.isComplete, session.result, setResult, tasks])

  const restart = () => {
    resetAssessment()
    navigate('/assessment')
  }

  if (!session.isComplete) {
    return (
      <main className="page-shell">
        <section className="content-block">
          <h1 className="page-title">{copy.inProgressTitle}</h1>
          <p className="page-description">{copy.inProgressDescription}</p>
          <div className="action-row">
            <Link className="button-secondary" to="/intro">
              {copy.backToIntro}
            </Link>
            <Link className="button-primary" to="/assessment">
              {copy.continueAssessment}
            </Link>
          </div>
        </section>
      </main>
    )
  }

  if (!session.result) {
    return (
      <main className="page-shell">
        <section className="content-block">
          <h1 className="page-title">{copy.fallbackTitle}</h1>
          <p className="page-description">{copy.fallbackDescription}</p>
          <div className="action-row">
            <button className="button-secondary" type="button" onClick={restart}>
              {copy.restart}
            </button>
            <Link className="button-primary" to="/assessment">
              {copy.reviewAnswers}
            </Link>
          </div>
        </section>
      </main>
    )
  }

  const localizedResult = localizeAssessmentResult(session.result, locale)

  return (
    <main className="page-shell">
      <section className="content-block">
        <p className="eyebrow">{copy.levelLabel}</p>
        <h1 className="page-title">{session.result.level}</h1>
        <p className="page-description">
          {copy.scoreLabel}: {session.result.finalScore}/100
        </p>

        <div className="panel">
          <h2 className="section-title">{copy.summaryTitle}</h2>
          <p className="page-description">{localizedResult.summary}</p>
          {session.result.completionPenalty < 1 && (
            <p className="helper-text">{copy.completedWithMissingData}</p>
          )}
        </div>

        <div className="panel">
          <h2 className="section-title">{copy.strengthsTitle}</h2>
          <ul className="meta-list">
            {localizedResult.strengths.map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>
        </div>

        <div className="panel">
          <h2 className="section-title">{copy.gapsTitle}</h2>
          <ul className="meta-list">
            {localizedResult.gaps.map((gap) => (
              <li key={gap}>{gap}</li>
            ))}
          </ul>
        </div>

        <div className="panel">
          <h2 className="section-title">{copy.capabilityTitle}</h2>
          <ul className="meta-list">
            {Object.entries(session.result.capabilityScores).map(([capability, score]) => (
              <li key={capability}>
                {capabilityLabels[capability as keyof typeof capabilityLabels]}: {Math.round(score)}/100
              </li>
            ))}
          </ul>
        </div>

        <div className="panel">
          <h2 className="section-title">{copy.aiPressureTitle}</h2>
          <p className="field-label">{copy.aiAlreadyLabel}</p>
          <ul className="meta-list">
            {localizedResult.aiPressure.alreadyHandledWell.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="field-label">{copy.aiHelpsLabel}</p>
          <ul className="meta-list">
            {localizedResult.aiPressure.helpsButNeedsJudgment.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="field-label">{copy.aiHumanLabel}</p>
          <ul className="meta-list">
            {localizedResult.aiPressure.stillHumanHeavy.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="panel">
          <h2 className="section-title">{copy.nextStepsTitle}</h2>
          <ul className="meta-list">
            {localizedResult.nextSteps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="panel">
          <h2 className="section-title">{copy.launchNoteTitle}</h2>
          <p className="page-description">{copy.launchExperimentNote}</p>
          <p className="helper-text">{copy.launchOpenSourceNote}</p>
        </div>

        <div className="action-row">
          <button className="button-secondary" type="button" onClick={restart}>
            {copy.restart}
          </button>
          <Link className="button-primary" to="/assessment">
            {copy.reviewAnswers}
          </Link>
        </div>
      </section>
    </main>
  )
}
