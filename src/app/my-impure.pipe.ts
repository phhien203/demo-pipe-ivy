import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "myImpure",
  pure: false,
})
export class MyImpurePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return value + "IMPURE";
  }
}
