let privateSubject = null;

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
    privateSubject = subject;
  }

  // Proxy may do smth before and after real request
  request() {
    if (checkAccess()) {
      privateSubject.request();
      logAccess();
    }
  }
}

export { Proxy };
