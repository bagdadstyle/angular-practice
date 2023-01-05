import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'canFly'
})

export class CanFly implements PipeTransform{

    transform(fly: boolean):string {
        return fly ? 'Can Fly' : 'No Fly'
    }
}