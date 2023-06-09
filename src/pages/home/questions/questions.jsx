import React from 'react';
import Question from './question';
import urlQuestions from '../../../data/question-data.JSON';
import image from '../../../assets/images/questions/toys_party.webp';
import useFetch from '../../../customHooks/useFetch';
function Questions() {
  const { data } = useFetch(urlQuestions);
  const newQuestion = data.map((question, index) => {
    return <Question key={index} {...question} />;
  });
  return (
    <section className='container m-auto right-active'>
      <h1 className='text-center text-3xl mt-24'>Frequently Asked Questions</h1>
      <h3 className='text-center text-xl text-cyan m-8'>
        Find your answer from here
      </h3>
      <div className='flex justify-between'>
        <div className='relative py-4 w-1/2'>
          <img className='animated-question-img' src={image} alt={image} />
          <div className='absolute'></div>
        </div>
        <div className='w-1/2'>{newQuestion}</div>
      </div>
    </section>
  );
}
export default Questions;
