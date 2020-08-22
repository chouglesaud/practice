interface IHandler {
    setNext(handler: IHandler): void;
    handle(): void;
}

abstract class BaseHandler implements IHandler {
    private _nextHandler: IHandler;
    setNext(handler: IHandler): IHandler {
        this._nextHandler = handler;
        return handler;
    }
    handle(): any {
        if (this._nextHandler) return this._nextHandler.handle();
        return null;
    }
}

// class MonkeyHandler extends BaseHandler {
//     handle(request: any) {
//         if (request === "banana") return `Monkey: I'll eat the ${request}`;
//         return super.handle(request);
//     }
// }

// class SquirrelHandler extends BaseHandler {
//     handle(request: any) {
//         if (request === "nut") return `Squirrel: I'll eat the ${request}.`;
//         return super.handle(request);
//     }
// }

// class DogHandler extends BaseHandler {
//     handle(request: any) {
//         if (request === "meatball") return `Dog: I'll eat the ${request}`;
//         return super.handle(request);
//     }
// }

// const monkey = new MonkeyHandler();
// const squirrel = new SquirrelHandler();
// const dog = new DogHandler();

// monkey.setNext(squirrel).setNext(dog);

// console.log(monkey.handle("meatball"));

// form varification
/**
 * username
 * email
 * password
 */

class UsernameHandler extends BaseHandler {
    private _username: string;
    constructor(username: string) {
        super();
        this._username = username;
    }
    handle(): string | IHandler {
        if (this._username.length < 1) return `empty string`;
        return super.handle();
    }
}
class EmailHandler extends BaseHandler {
    private _email: string;
    constructor(email: string) {
        super();
        this._email = email;
    }
    handle(): string | IHandler {
        if (this._email.length < 1) return `email format is not valid`;
        return super.handle();
    }
}
class PasswordHandler extends BaseHandler {
    private _password: string;
    constructor(pasword: string) {
        super();
        this._password = pasword;
    }
    handle(): string | IHandler {
        if (this._password.length < 8) return `weak password`;
        return super.handle();
    }
}

const formData = {
    username: "",
    email: "saudchougle.sc@gmail.com",
    password: "saud1",
};

console.log(
    new UsernameHandler(formData.username)
        .setNext(new EmailHandler(formData.email))
        .setNext(new PasswordHandler(formData.password))
);
