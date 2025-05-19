declare namespace Ext.lib
{
  class Region
  {
    public static getRegion(d: [number, number]): Region;

    public constructor(public top: number, public right: number, public bottom: number, public left: number);

    public contains(e: Region): boolean;

    public getArea(): number;

    public intersect(e: Region): Region;

    public union(e: Region): Region;

    public adjust(top: number, right: number, bottom: number, left: number): Region
  }
}
