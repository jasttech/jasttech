import { useEffect } from 'react';

const Welcome = () => {
  //   useEffect(() => {
  //     const words = new Array();
  //     words.push('incredibly');
  //     words.push('especially');
  //     words.push('extremely');

  //     var point = 0;

  //     function changeWords() {
  //       document.getElementById('words').appendChild(words[point]);
  //       if (point < words.length - 1) {
  //         point++;
  //       } else {
  //         point = 0;
  //       }
  //     }
  //     setInterval(changeWords, 5000);
  //     changeWords();
  //   }, []);
  return (
    <>
      <br />
      <br />
      <h2 class="featurette-heading">
        We build <span id="words"></span> effective software.
      </h2>
      <br />
      <p class="lead">
        We serve clients at every level of their businesses, in whatever
        capacity we can be most useful, whether as a trusted advisor to top
        management. We strive to build a relationship of trust with every
        client, for the long-term.
      </p>
    </>
  );
};

export { Welcome };
