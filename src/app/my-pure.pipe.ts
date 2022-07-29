import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "myPure",
  pure: true,
})
export class MyPurePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return value + "PURE";
  }
}
