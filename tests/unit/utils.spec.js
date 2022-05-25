import { penjumlahan, pengurangan, pembagian, perkalian, ratarata, sisabagi, luaspersegi, luaslingkaran, luaskubus, volumekubus } from "@/utils";

// Soal No 1
describe('Test fungsionalitas dari utils', () => {
  it('Lakukan penjumlahan bilangan positif', () => {
    expect(penjumlahan(3, 3)).toBe(6)
  }),
  it('Lakukan penjumlahan bilangan positif', () => {
    expect(penjumlahan(2, -5)).toBe(-3)
  }),
  it('Lakukan penjjumlahan bilangan positif', () => {
    expect(penjumlahan(1, 2)).toBe(3)
  })
}),

// Soal No 2
describe('Test fungsionalitas dari utils', () => {
  it('Lakukan pengurangan bilangan positif', () => {
    expect(pengurangan(3, 3)).toBe(0)
  }),
  it('Lakukan pengurangan bilangan positif', () => {
    expect(pengurangan(4, 2)).toBe(2)
  }),
  it('Lakukan pengurangan bilangan positif', () => {
    expect(pengurangan(5, 1)).toBe(4)
  })
}),

// Soal No 3
describe('Test fungsionalitas dari utils', () => {
  it('Lakukan pembagian bilangan positif', () => {
    expect(pembagian(8, 2)).toBe(4)
  }),
  it('Lakukan pembagian bilangan positif', () => {
    expect(pembagian(4, 2)).toBe(2)
  }),
  it('Lakukan pembagian bilangan positif', () => {
    expect(pembagian(9, 3)).toBe(3)
  })
}),

// Soal No 4
describe('Test fungsionalitas dari utils', () => {
  it('Lakukan perkalian bilangan positif', () => {
    expect(perkalian(8, 2)).toBe(16)
  }),
  it('Lakukan perkalian bilangan positif', () => {
    expect(perkalian(4, 2)).toBe(8)
  }),
  it('Lakukan perkalian bilangan positif', () => {
    expect(perkalian(10, 2)).toBe(20)
  })
}),

// Soal No 5
describe('Test fungsionalitas dari utils', () => {
  it('Lakukan rata-rata bilangan positif', () => {
    expect(ratarata(1, 2, 3, 4, 5)).toBe(3)
  }),
  it('Lakukan rata-rata bilangan positif', () => {
    expect(ratarata(10, 20, 30, 40, 50)).toBe(30)
  }),
  it('Lakukan rata-rata bilangan positif', () => {
    expect(ratarata(5, 10, 15, 20, 25)).toBe(15)
  })
}),

// Soal No 6
describe('Test fungsionalitas dari utils', () => {
  it('Lakukan sisa bagi bilangan positif', () => {
    expect(sisabagi(9, 2)).toBe(1)
  }),
  it('Lakukan sisa bagi bilangan positif', () => {
    expect(sisabagi(10, 3)).toBe(1)
  }),
  it('Lakukan sisa bagi bilangan positif', () => {
    expect(sisabagi(17, 5)).toBe(2)
  })
}),

// Soal No 7
describe('Test fungsionalitas dari utils', () => {
  it('Lakukan luas persegi', () => {
    expect(luaspersegi(10)).toBe(100)
  }),
  it('Lakukan luas persegi', () => {
    expect(luaspersegi(2)).toBe(4)
  }),
  it('Lakukan luas persegi', () => {
    expect(luaspersegi(15)).toBe(225)
  })
}),

// Soal No 8
describe('Test fungsionalitas dari utils', () => {
  it('Lakukan luas lingkaran', () => {
    expect(luaslingkaran(7)).toBe(153.86)
  }),
  it('Lakukan luas lingkaran', () => {
    expect(luaslingkaran(6)).toBe(113.04)
  }),
  it('Lakukan luas lingkaran', () => {
    expect(luaslingkaran(5)).toBe(78.5)
  })
}),

// Soal No 9
describe('Test fungsionalitas dari utils', () => {
  it('Lakukan luas kubus', () => {
    expect(luaskubus(4)).toBe(96.00)
  }),
  it('Lakukan luas kubus', () => {
    expect(luaskubus(5)).toBe(150.00)
  }),
  it('Lakukan luas kubus', () => {
    expect(luaskubus(5.70)).toBe(194.94)
  })
}),

// Soal No 10
describe('Test fungsionalitas dari utils', () => {
  it('Lakukan volume kubus', () => {
    expect(volumekubus(4)).toBe(64)
  }),
  it('Lakukan volume kubus', () => {
    expect(volumekubus(5)).toBe(125)
  }),
  it('Lakukan volume kubus', () => {
    expect(volumekubus(5.70)).toBe(185.193)
  })
})