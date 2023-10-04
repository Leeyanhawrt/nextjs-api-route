import { buildFeedbackPath, extractFeedback } from "./api/feedback";
import { Fragment, useState } from "react";

function FeedbackPage({ feedbackItems }) {
  const [feedbackData, setFeedbackData] = useState();

  const loadFeedbackHandler = (id) => {
    fetch(`/api/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFeedbackData(data.feedback)
      })
  }

  return (
    <Fragment>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {feedbackItems.map((item) => {
          return <li key={item.id}>{item.feedback}<button onClick={loadFeedbackHandler.bind(null, item.id)}>Show Deatails</button></li>
        })}
      </ul>
    </Fragment>
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