import { FunctionalComponent } from 'preact';
import { useEffect, useCallback, useState } from 'preact/hooks';

const Joke: FunctionalComponent = () => {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const getJokes: () => Promise<void> = useCallback(async (): Promise<void> => {
    const jokesAPI = await fetch(
      'https://official-joke-api.appspot.com/jokes/programming/random'
    );
    if (jokesAPI.ok) {
      setJokes(await jokesAPI.json());
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    getJokes();
  }, []);
  if (isLoading) {
    return <p>All right, looks like you're bored. Let me think of a joke...</p>;
  }
  const { setup, punchline } = jokes[0];
  return (
    <section>
      <p>
        {setup}
        <br />
        <br />
        {punchline}
      </p>
    </section>
  );
};

export default Joke;
