<ul class="nav nav-pills">
  <li role="presentation"><a href="/">Questionnaire</a></li>
  <li role="presentation"><a href="/search">Start a new search</a></li>
  
  @if (Auth::guest())
  <li role="presentation"><a href="auth/login">Login</a></li>
  <li role="presentation"><a href="auth/register">Register</a></li>
  @else
  <li role="presentation"><a href="auth/logout">Logout</a></li>
  @endif
</ul>