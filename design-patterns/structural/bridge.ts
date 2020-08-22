interface IRemote {
    togglePower(): void;
    volumeUp(): void;
    volumeDown(): void;
    channelUP(): void;
    channelDown(): void;
}
interface IDevice {
    isEnable(): boolean;
    enable(): void;
    disable(): void;
    increaseVolume(): void;
    decreaseVolume(): void;
    goToNextChannel(): void;
    goToPreviousChannel(): void;
}

class Remote implements IRemote {
    protected _device: IDevice;
    constructor(device: IDevice) {
        this._device = device;
    }
    togglePower(): void {
        if (this._device.isEnable()) {
            this._device.disable();
        } else {
            this._device.enable();
        }
    }
    volumeUp(): void {
        this._device.increaseVolume();
    }
    volumeDown(): void {
        this._device.decreaseVolume();
    }
    channelUP(): void {
        this._device.goToNextChannel();
    }
    channelDown(): void {
        this._device.goToPreviousChannel();
    }
}

class Tv implements IDevice {
    protected _state: boolean;
    protected _volume: number;
    protected _channel: number;

    constructor(state: boolean) {
        this._state = state;
        this._volume = 5;
        this._channel = 103;
    }
    isEnable(): boolean {
        return this._state;
    }
    enable(): void {
        this._state = true;
    }
    disable(): void {
        this._state = false;
    }
    increaseVolume(): void {
        this._volume++;
    }
    decreaseVolume(): void {
        this._volume--;
    }
    goToNextChannel(): void {
        this._channel++;
    }
    goToPreviousChannel(): void {
        this._channel--;
    }
}

const power = false;

const tv = new Tv(power);
const remote = new Remote(tv);

console.log(tv);

remote.togglePower();
remote.volumeUp();
remote.channelDown();

console.log(tv);
