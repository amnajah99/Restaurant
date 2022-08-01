# QUESTIONS

**Question 1: Why immutability of data is important?**

Answer: Immutability helps to make data predictable because any changes made to the data do not affect the original data. This helps to better track bugs and any side effects caused by modifying data whereas it's hard to track changes in mutation. 

**Question 2: Can we use React without JSX? How?**

Answer: Yes, we can by using simple JavaScript. JSX has a more readable and understandable syntax but the same can be accomplished with JavaScript.

**Question 3: Which Lifecycle method did you use in this project?**

Answer: I made the project using functional components. I used the useEffect hook with an empty array of denpendency in CartItem.js and CategoryItem.js, which was equivalent to the componentDidMount method. I also used UseEffect hook with an array of dependency containing props or state in MenuCard.js and CartItem.js which renders the component initially as well as any time an item in the array of dependency is changed.

**Question 4: Did you use React Dev tools? How does it help you?**

Answer: I did not use the React Dev Tools much aside from resolving an error in a component caused by overusage of states.

**Question 5: What things did you test using the unit test?**

Answer: None

**Question 6: Did you use any Hooks in this project? What types?**

Answer: I used the useEffect and useState hooks in the project. 