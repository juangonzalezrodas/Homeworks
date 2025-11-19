class City {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.greenZones = [];
  }

  addGreenZone(zone) {
    this.greenZones.push(zone);
  }

  getMaxHeight() {
    if (this.greenZones.length === 0) return 0;
    return Math.max(...this.greenZones.map(gz => gz.getHeight()));
  }

  getTotalGreenZones() {
    return this.greenZones.reduce((sum, gz) => sum + gz.getTotalCount(), 0);
  }

  getTreeData() {
    if (this.greenZones.length === 0) return null;
    
    return {
      name: `${this.name} - Zonas Verdes`,
      children: this.greenZones.map(gz => gz.toD3Format())
    };
  }
}

export default City;