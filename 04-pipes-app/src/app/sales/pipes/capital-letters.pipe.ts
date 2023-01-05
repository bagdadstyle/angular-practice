import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "capitalLetter",

})
export class CapitalLetters implements PipeTransform {

    transform(value: string, inCapital: boolean = true): string{
        return inCapital ? value.toUpperCase() : value.toLocaleLowerCase()
    }
}