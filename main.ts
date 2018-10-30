//% weight=70 icon="\uf0e7" color=#d2691e block="電気の利用(SW)"
namespace gp {
    //% blockId=turn_on block="スイッチON %v"
    export function turnON(): void {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
    //% blockId=turn_off block="スイッチOFF %v"
    export function turnOFF(): void {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    //% blockId=is_dark block="暗い %v"
    export function isDark(): boolean {
        if (input.lightLevel() < 30) {
            return true;
        } else {
            return false;
        }
    }
}
