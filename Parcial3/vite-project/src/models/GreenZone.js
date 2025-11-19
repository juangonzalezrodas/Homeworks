class GreenZone {
  constructor(id, name, parentId = null) {
    this.id = id;
    this.name = name;
    this.parentId = parentId;
    this.subzones = [];
  }

  addSubzone(subzone) {
    this.subzones.push(subzone);
  }

  getHeight() {
    if (this.subzones.length === 0) return 1;
    return 1 + Math.max(...this.subzones.map(sz => sz.getHeight()));
  }

    getTotalCount() {
    return 1 + this.subzones.reduce((sum, sz) => sum + sz.getTotalCount(), 0);
    }

    toD3Format() {
    return {
        name: this.name,
        attributes: {
        id: this.id,
        altura: this.getHeight(),
        total: this.getTotalCount()
        },
        children: this.subzones.map(sz => sz.toD3Format())
    };
    }
}

export default GreenZone;