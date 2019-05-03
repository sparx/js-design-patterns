function checkAccess() {
  console.log('Proxy: check access before executing real request...');
  return true;
}

function logAccess() {
  console.log('Proxy: log request.');
}

// must have same interface as Subject
class Proxy {
  // reference to object of Subject class
  constructor(subject) {
    this.subject = subject;
  }

  // Proxy may do smth before and after real request
  request() {
    if (checkAccess()) {
      this.subject.request();
      logAccess();
    }
  }
}

export { Proxy };
