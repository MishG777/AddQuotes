import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

import useHttp from "../hooks/use-http"; //imported from custom hook component
import { addQuote } from "../lib/api"; // in /lib/api are functions where we send http requests

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
    //if status becomes 'pending' it means usLoading is true, so we send it in QuoteForm.js component and loading spinner apears
  );
};

export default NewQuote;
