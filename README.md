# Uncommon React Native Bug: Early State Access

This repository demonstrates a common, yet often subtle, bug in React Native functional components: accessing a state variable before it has been initialized.

## The Bug
The `bug.js` file showcases the issue.  The `count` state variable is accessed before the `useState` hook has a chance to assign its initial value. This often leads to unexpected behavior or runtime errors.

## The Solution
The `bugSolution.js` demonstrates the fix. By conditionally rendering the content that depends on the state, you prevent accessing the `count` variable until after it's been initialized by the `useState` hook.