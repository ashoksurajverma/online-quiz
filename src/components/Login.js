import Quiz from "./Quiz";

function SignIn() {
  return (
    <div class="container">
      <Quiz />
      <h2>Login Form</h2>
      <form action="your-server-endpoint" method="POST">
        <label for="password">Mobile Number:</label>
        <input type="text" id="mobile" name="mobile" required />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SignIn;
