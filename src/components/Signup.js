function Signup() {
  return (
    <div class="container">
      <h2>Signup Form</h2>
      <form action="your-server-endpoint" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <input type="submit" value="Sign up" />
      </form>
    </div>
  );
}

export default Signup;
