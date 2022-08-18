import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {isLoading ? (
        <LoadingQuote />
      ) : (
        <Quote
          author={author}
          quote={quote}
          increment={increment}
          isLoading={isLoading}
        />
      )}
      <button
        className="btn btn-primary"
        onClick={() => increment(1)}
        disabled={isLoading}
      >
        Next quote
      </button>
    </>
  );
};
