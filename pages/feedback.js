import { buildFeedbackPath, extractFeedback } from "./api/feedback";

function FeedbackPage({ feedbackItems }) {
  return (
    <ul>
      {feedbackItems.map((item) => {
        return <li key={item.id}>{item.feedback}</li>
      })}
    </ul>
  )
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath)
  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedbackPage;