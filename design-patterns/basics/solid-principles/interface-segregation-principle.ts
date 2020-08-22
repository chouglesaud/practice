// Clients shouldn’t be forced to depend on methods they do not use.

// BEFORE: not all clients can satisfy the requirements of the
// bloated interface

// interface CloudProvider {
//   storeFile(): void;
//   getFile(): void;
//   createServer(): void;
//   listServers(): void;
//   getCDNAdress(): void;
// }
// class Amazon implements CloudProvider {
//   storeFile(): void {}
//   getFile(): void {}
//   createServer(): void {}
//   listServers(): void {}
//   getCDNAdress(): void {}
// }
// // dropbox doesnot support createServer() and listServer() still implementing
// class Dropbox implements CloudProvider {
//   storeFile(): void {}
//   getFile(): void {}
//   createServer(): void {}
//   listServers(): void {}
//   getCDNAdress(): void {}
// }

// AFTER: one bloated interface is broken down into a set of more
// granular interfaces.
interface CloudHostingProvider {
  createServer(): void;
  listServers(): void;
}
interface CDNProvider {
  getCDNAdress(): void;
}
interface CloudStorageProvider {
  storeFile(): void;
  getFile(): void;
}
class Amazon
  implements CloudHostingProvider, CDNProvider, CloudStorageProvider {
  storeFile(): void {}
  getFile(): void {}
  createServer(): void {}
  listServers(): void {}
  getCDNAdress(): void {}
}
// dropbox doesnot support createServer() and listServer() still implementing
class Dropbox implements CloudStorageProvider {
  storeFile(): void {}
  getFile(): void {}
}
