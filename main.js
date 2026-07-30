function menu() {
    const menu = document.querySelector('.menu');
    menu.addEventListener('click', () => {
        menu.classList.toggle('active');
    })
}

menu();


// PERIODIC TABLE
const elements = [
    // --- ROW 1 ---
    {
        num: 1, symbol: "H", name: "Hydrogen", col: 1, row: 1, type: "nonmetal", formula: "2H₂ + O₂ → 2H₂O", usage: "Rocket fuel, ammonia production, and clean energy cells", molarMass: 1.008,
        formulas: [
            { equation: "2H₂ + O₂ → 2H₂O", reactants: [{ name: "H₂", coeff: 2, molarMass: 2.016 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "H₂O", coeff: 2, molarMass: 18.015 }] },
            { equation: "N₂ + 3H₂ → 2NH₃", reactants: [{ name: "H₂", coeff: 3, molarMass: 2.016 }, { name: "N₂", coeff: 1, molarMass: 28.014 }], products: [{ name: "NH₃", coeff: 2, molarMass: 17.031 }] },
            { equation: "2H₂ + CO → CH₃OH", reactants: [{ name: "H₂", coeff: 2, molarMass: 2.016 }, { name: "CO", coeff: 1, molarMass: 28.01 }], products: [{ name: "CH₃OH", coeff: 1, molarMass: 32.04 }] }
        ]
    },
    {
        num: 2, symbol: "He", name: "Helium", col: 18, row: 1, type: "noble-gas", formula: "2He + O₂ → 2HeO", usage: "Cooling MRI magnets, party balloons, and arc welding", molarMass: 4.0026,
        formulas: [
            { equation: "2He + O₂ → 2HeO", reactants: [{ name: "He", coeff: 2, molarMass: 4.0026 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "HeO", coeff: 2, molarMass: 20.001 }] },
            { equation: "He + Cl₂ → HeCl₂", reactants: [{ name: "He", coeff: 1, molarMass: 4.0026 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "HeCl₂", coeff: 1, molarMass: 74.908 }] },
            { equation: "2He + F₂ → 2HeF", reactants: [{ name: "He", coeff: 2, molarMass: 4.0026 }, { name: "F₂", coeff: 1, molarMass: 37.996 }], products: [{ name: "HeF", coeff: 2, molarMass: 23.001 }] }
        ]
    },

    // --- ROW 2 ---
    {
        num: 3, symbol: "Li", name: "Lithium", col: 1, row: 2, type: "alkali", formula: "4Li + O₂ → 2Li₂O", usage: "Rechargeable batteries for phones and EVs, mood stabilizers", molarMass: 6.94,
        formulas: [
            { equation: "4Li + O₂ → 2Li₂O", reactants: [{ name: "Li", coeff: 4, molarMass: 6.94 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "Li₂O", coeff: 2, molarMass: 29.88 }] },
            { equation: "2Li + H₂ → 2LiH", reactants: [{ name: "Li", coeff: 2, molarMass: 6.94 }, { name: "H₂", coeff: 1, molarMass: 2.016 }], products: [{ name: "LiH", coeff: 2, molarMass: 7.95 }] },
            { equation: "2Li + Cl₂ → 2LiCl", reactants: [{ name: "Li", coeff: 2, molarMass: 6.94 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "LiCl", coeff: 2, molarMass: 42.39 }] }
        ]
    },
    {
        num: 4, symbol: "Be", name: "Beryllium", col: 2, row: 2, type: "alkaline-earth", formula: "2Be + O₂ → 2BeO", usage: "Aerospace structural components, X-ray equipment windows", molarMass: 9.0122,
        formulas: [
            { equation: "2Be + O₂ → 2BeO", reactants: [{ name: "Be", coeff: 2, molarMass: 9.0122 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "BeO", coeff: 2, molarMass: 25.011 }] },
            { equation: "Be + Cl₂ → BeCl₂", reactants: [{ name: "Be", coeff: 1, molarMass: 9.0122 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "BeCl₂", coeff: 1, molarMass: 79.918 }] },
            { equation: "Be + F₂ → BeF₂", reactants: [{ name: "Be", coeff: 1, molarMass: 9.0122 }, { name: "F₂", coeff: 1, molarMass: 37.996 }], products: [{ name: "BeF₂", coeff: 1, molarMass: 47.01 }] }
        ]
    },
    {
        num: 5, symbol: "B", name: "Boron", col: 13, row: 2, type: "metalloid", formula: "4B + 3O₂ → 2B₂O₃", usage: "Borosilicate heat-resistant glass (Pyrex), fiberglass", molarMass: 10.81,
        formulas: [
            { equation: "4B + 3O₂ → 2B₂O₃", reactants: [{ name: "B", coeff: 4, molarMass: 10.81 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "B₂O₃", coeff: 2, molarMass: 69.62 }] },
            { equation: "2B + 3Cl₂ → 2BCl₃", reactants: [{ name: "B", coeff: 2, molarMass: 10.81 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "BCl₃", coeff: 2, molarMass: 117.17 }] },
            { equation: "2B + 3F₂ → 2BF₃", reactants: [{ name: "B", coeff: 2, molarMass: 10.81 }, { name: "F₂", coeff: 3, molarMass: 37.997 }], products: [{ name: "BF₃", coeff: 2, molarMass: 67.81 }] }
        ]
    },
    {
        num: 6, symbol: "C", name: "Carbon", col: 14, row: 2, type: "nonmetal", formula: "C + O₂ → CO₂", usage: "Organic life basis, steel manufacturing, carbon fiber, diamonds", molarMass: 12.011,
        formulas: [
            { equation: "C + O₂ → CO₂", reactants: [{ name: "C", coeff: 1, molarMass: 12.011 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "CO₂", coeff: 1, molarMass: 44.009 }] },
            { equation: "2C + O₂ → 2CO", reactants: [{ name: "C", coeff: 2, molarMass: 12.011 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "CO", coeff: 2, molarMass: 28.01 }] },
            { equation: "C + 2H₂ → CH₄", reactants: [{ name: "C", coeff: 1, molarMass: 12.011 }, { name: "H₂", coeff: 2, molarMass: 2.016 }], products: [{ name: "CH₄", coeff: 1, molarMass: 16.043 }] }
        ]
    },
    {
        num: 7, symbol: "N", name: "Nitrogen", col: 15, row: 2, type: "nonmetal", formula: "N₂ + 3H₂ → 2NH₃", usage: "Agricultural fertilizers, food packaging, liquid nitrogen coolant", molarMass: 14.007,
        formulas: [
            { equation: "N₂ + 3H₂ → 2NH₃", reactants: [{ name: "N₂", coeff: 1, molarMass: 28.014 }, { name: "H₂", coeff: 3, molarMass: 2.016 }], products: [{ name: "NH₃", coeff: 2, molarMass: 17.031 }] },
            { equation: "N₂ + O₂ → 2NO", reactants: [{ name: "N₂", coeff: 1, molarMass: 28.014 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "NO", coeff: 2, molarMass: 30.006 }] },
            { equation: "3Mg + N₂ → Mg₃N₂", reactants: [{ name: "Mg", coeff: 3, molarMass: 24.305 }, { name: "N₂", coeff: 1, molarMass: 28.014 }], products: [{ name: "Mg₃N₂", coeff: 1, molarMass: 100.929 }] }
        ]
    },
    {
        num: 8, symbol: "O", name: "Oxygen", col: 16, row: 2, type: "nonmetal", formula: "C + O₂ → CO₂", usage: "Respiration, medical oxygen tanks, steelmaking oxidation", molarMass: 15.999,
        formulas: [
            { equation: "2H₂ + O₂ → 2H₂O", reactants: [{ name: "O₂", coeff: 1, molarMass: 31.998 }, { name: "H₂", coeff: 2, molarMass: 2.016 }], products: [{ name: "H₂O", coeff: 2, molarMass: 18.015 }] },
            { equation: "C + O₂ → CO₂", reactants: [{ name: "O₂", coeff: 1, molarMass: 31.998 }, { name: "C", coeff: 1, molarMass: 12.011 }], products: [{ name: "CO₂", coeff: 1, molarMass: 44.009 }] },
            { equation: "2CO + O₂ → 2CO₂", reactants: [{ name: "CO", coeff: 2, molarMass: 28.01 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "CO₂", coeff: 2, molarMass: 44.009 }] }
        ]
    },
    {
        num: 9, symbol: "F", name: "Fluorine", col: 17, row: 2, type: "halogen", formula: "H₂ + F₂ → 2HF", usage: "Toothpaste cavity prevention, Teflon non-stick coatings", molarMass: 18.998,
        formulas: [
            { equation: "H₂ + F₂ → 2HF", reactants: [{ name: "F₂", coeff: 1, molarMass: 37.996 }, { name: "H₂", coeff: 1, molarMass: 2.016 }], products: [{ name: "HF", coeff: 2, molarMass: 20.006 }] },
            { equation: "2Na + F₂ → 2NaF", reactants: [{ name: "F₂", coeff: 1, molarMass: 37.996 }, { name: "Na", coeff: 2, molarMass: 22.990 }], products: [{ name: "NaF", coeff: 2, molarMass: 41.988 }] },
            { equation: "Xe + 2F₂ → XeF₄", reactants: [{ name: "F₂", coeff: 2, molarMass: 37.996 }, { name: "Xe", coeff: 1, molarMass: 131.29 }], products: [{ name: "XeF₄", coeff: 1, molarMass: 207.28 }] }
        ]
    },
    {
        num: 10, symbol: "Ne", name: "Neon", col: 18, row: 2, type: "noble-gas", formula: "2Ne + O₂ → 2NeO", usage: "Illuminated neon signs, high-voltage indicators, gas lasers", molarMass: 20.180,
        formulas: [
            { equation: "2Ne + O₂ → 2NeO", reactants: [{ name: "Ne", coeff: 2, molarMass: 20.180 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "NeO", coeff: 2, molarMass: 36.179 }] },
            { equation: "Ne + Cl₂ → NeCl₂", reactants: [{ name: "Ne", coeff: 1, molarMass: 20.180 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "NeCl₂", coeff: 1, molarMass: 91.086 }] },
            { equation: "Ne + Ar → NeAr", reactants: [{ name: "Ne", coeff: 1, molarMass: 20.180 }, { name: "Ar", coeff: 1, molarMass: 39.948 }], products: [{ name: "NeAr", coeff: 1, molarMass: 60.128 }] }
        ]
    },

    // --- ROW 3 ---
    {
        num: 11, symbol: "Na", name: "Sodium", col: 1, row: 3, type: "alkali", formula: "2Na + Cl₂ → 2NaCl", usage: "Table salt (NaCl), street lighting, nerve function regulation", molarMass: 22.990,
        formulas: [
            { equation: "2Na + Cl₂ → 2NaCl", reactants: [{ name: "Na", coeff: 2, molarMass: 22.990 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "NaCl", coeff: 2, molarMass: 58.443 }] },
            { equation: "2Na + H₂ → 2NaH", reactants: [{ name: "Na", coeff: 2, molarMass: 22.990 }, { name: "H₂", coeff: 1, molarMass: 2.016 }], products: [{ name: "NaH", coeff: 2, molarMass: 23.998 }] },
            { equation: "4Na + O₂ → 2Na₂O", reactants: [{ name: "Na", coeff: 4, molarMass: 22.990 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "Na₂O", coeff: 2, molarMass: 61.979 }] }
        ]
    },
    {
        num: 12, symbol: "Mg", name: "Magnesium", col: 2, row: 3, type: "alkaline-earth", formula: "2Mg + O₂ → 2MgO", usage: "Lightweight aircraft alloys, flares, fireworks, antacids", molarMass: 24.305,
        formulas: [
            { equation: "2Mg + O₂ → 2MgO", reactants: [{ name: "Mg", coeff: 2, molarMass: 24.305 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "MgO", coeff: 2, molarMass: 40.304 }] },
            { equation: "Mg + Cl₂ → MgCl₂", reactants: [{ name: "Mg", coeff: 1, molarMass: 24.305 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "MgCl₂", coeff: 1, molarMass: 95.211 }] },
            { equation: "2Mg + Si → Mg₂Si", reactants: [{ name: "Mg", coeff: 2, molarMass: 24.305 }, { name: "Si", coeff: 1, molarMass: 28.085 }], products: [{ name: "Mg₂Si", coeff: 1, molarMass: 76.695 }] }
        ]
    },
    {
        num: 13, symbol: "Al", name: "Aluminum", col: 13, row: 3, type: "post-transition", formula: "4Al + 3O₂ → 2Al₂O₃", usage: "Beverage cans, foil, airplane fuselages, window frames", molarMass: 26.982,
        formulas: [
            { equation: "4Al + 3O₂ → 2Al₂O₃", reactants: [{ name: "Al", coeff: 4, molarMass: 26.982 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "Al₂O₃", coeff: 2, molarMass: 101.961 }] },
            { equation: "2Al + 3Cl₂ → 2AlCl₃", reactants: [{ name: "Al", coeff: 2, molarMass: 26.982 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "AlCl₃", coeff: 2, molarMass: 133.341 }] },
            { equation: "2Al + 3S → Al₂S₃", reactants: [{ name: "Al", coeff: 2, molarMass: 26.982 }, { name: "S", coeff: 3, molarMass: 32.06 }], products: [{ name: "Al₂S₃", coeff: 1, molarMass: 150.16 }] }
        ]
    },
    {
        num: 14, symbol: "Si", name: "Silicon", col: 14, row: 3, type: "metalloid", formula: "Si + O₂ → SiO₂", usage: "Semiconductor microchips, computer processors, solar panels, glass", molarMass: 28.085,
        formulas: [
            { equation: "Si + O₂ → SiO₂", reactants: [{ name: "Si", coeff: 1, molarMass: 28.085 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "SiO₂", coeff: 1, molarMass: 60.083 }] },
            { equation: "Si + 2Cl₂ → SiCl₄", reactants: [{ name: "Si", coeff: 1, molarMass: 28.085 }, { name: "Cl₂", coeff: 2, molarMass: 70.906 }], products: [{ name: "SiCl₄", coeff: 1, molarMass: 169.897 }] },
            { equation: "Si + 2F₂ → SiF₄", reactants: [{ name: "Si", coeff: 1, molarMass: 28.085 }, { name: "F₂", coeff: 2, molarMass: 37.996 }], products: [{ name: "SiF₄", coeff: 1, molarMass: 104.077 }] }
        ]
    },
    {
        num: 15, symbol: "P", name: "Phosphorus", col: 15, row: 3, type: "nonmetal", formula: "P₄ + 5O₂ → P₄O₁₀", usage: "Synthetic fertilizers, safety match heads, detergents", molarMass: 30.974,
        formulas: [
            { equation: "P₄ + 5O₂ → P₄O₁₀", reactants: [{ name: "P₄", coeff: 1, molarMass: 123.896 }, { name: "O₂", coeff: 5, molarMass: 31.998 }], products: [{ name: "P₄O₁₀", coeff: 1, molarMass: 283.886 }] },
            { equation: "2P + 3Cl₂ → 2PCl₃", reactants: [{ name: "P", coeff: 2, molarMass: 30.974 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "PCl₃", coeff: 2, molarMass: 137.333 }] },
            { equation: "2P + 5Cl₂ → 2PCl₅", reactants: [{ name: "P", coeff: 2, molarMass: 30.974 }, { name: "Cl₂", coeff: 5, molarMass: 70.906 }], products: [{ name: "PCl₅", coeff: 2, molarMass: 208.239 }] }
        ]
    },
    {
        num: 16, symbol: "S", name: "Sulfur", col: 16, row: 3, type: "nonmetal", formula: "S + O₂ → SO₂", usage: "Sulfuric acid production, tire vulcanization, gunpowder", molarMass: 32.06,
        formulas: [
            { equation: "S + O₂ → SO₂", reactants: [{ name: "S", coeff: 1, molarMass: 32.06 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "SO₂", coeff: 1, molarMass: 64.058 }] },
            { equation: "2SO₂ + O₂ → 2SO₃", reactants: [{ name: "SO₂", coeff: 2, molarMass: 64.058 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "SO₃", coeff: 2, molarMass: 80.057 }] },
            { equation: "Fe + S → FeS", reactants: [{ name: "Fe", coeff: 1, molarMass: 55.845 }, { name: "S", coeff: 1, molarMass: 32.06 }], products: [{ name: "FeS", coeff: 1, molarMass: 87.905 }] }
        ]
    },
    {
        num: 17, symbol: "Cl", name: "Chlorine", col: 17, row: 3, type: "halogen", formula: "H₂ + Cl₂ → 2HCl", usage: "Water disinfection, PVC plastic pipes, bleaching agents", molarMass: 35.45,
        formulas: [
            { equation: "H₂ + Cl₂ → 2HCl", reactants: [{ name: "Cl₂", coeff: 1, molarMass: 70.906 }, { name: "H₂", coeff: 1, molarMass: 2.016 }], products: [{ name: "HCl", coeff: 2, molarMass: 36.461 }] },
            { equation: "2Na + Cl₂ → 2NaCl", reactants: [{ name: "Cl₂", coeff: 1, molarMass: 70.906 }, { name: "Na", coeff: 2, molarMass: 22.990 }], products: [{ name: "NaCl", coeff: 2, molarMass: 58.443 }] },
            { equation: "PCl₃ + Cl₂ → PCl₅", reactants: [{ name: "PCl₃", coeff: 1, molarMass: 137.333 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "PCl₅", coeff: 1, molarMass: 208.239 }] }
        ]
    },
    {
        num: 18, symbol: "Ar", name: "Argon", col: 18, row: 3, type: "noble-gas", formula: "2Ar + O₂ → 2ArO", usage: "Shielding gas for welding, double-pane insulating windows", molarMass: 39.948,
        formulas: [
            { equation: "2Ar + O₂ → 2ArO", reactants: [{ name: "Ar", coeff: 2, molarMass: 39.948 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "ArO", coeff: 2, molarMass: 55.947 }] },
            { equation: "Ar + Cl₂ → ArCl₂", reactants: [{ name: "Ar", coeff: 1, molarMass: 39.948 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "ArCl₂", coeff: 1, molarMass: 110.854 }] },
            { equation: "HArF → HF + Ar", reactants: [{ name: "HArF", coeff: 1, molarMass: 59.954 }], products: [{ name: "HF", coeff: 1, molarMass: 20.006 }, { name: "Ar", coeff: 1, molarMass: 39.948 }] }
        ]
    },

    // --- ROW 4 ---
    {
        num: 19, symbol: "K", name: "Potassium", col: 1, row: 4, type: "alkali", formula: "2K + Cl₂ → 2KCl", usage: "Crop fertilizers, soap making, human electrolyte balance", molarMass: 39.098,
        formulas: [
            { equation: "2K + H₂ → 2KH", reactants: [{ name: "K", coeff: 2, molarMass: 39.098 }, { name: "H₂", coeff: 1, molarMass: 2.016 }], products: [{ name: "KH", coeff: 2, molarMass: 40.106 }] },
            { equation: "2K + Cl₂ → 2KCl", reactants: [{ name: "K", coeff: 2, molarMass: 39.098 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "KCl", coeff: 2, molarMass: 74.551 }] },
            { equation: "4K + O₂ → 2K₂O", reactants: [{ name: "K", coeff: 4, molarMass: 39.098 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "K₂O", coeff: 2, molarMass: 94.196 }] }
        ]
    },
    {
        num: 20, symbol: "Ca", name: "Calcium", col: 2, row: 4, type: "alkaline-earth", formula: "2Ca + O₂ → 2CaO", usage: "Bone and teeth structure, cement, concrete production", molarMass: 40.078,
        formulas: [
            { equation: "2Ca + O₂ → 2CaO", reactants: [{ name: "Ca", coeff: 2, molarMass: 40.078 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "CaO", coeff: 2, molarMass: 56.077 }] },
            { equation: "Ca + Cl₂ → CaCl₂", reactants: [{ name: "Ca", coeff: 1, molarMass: 40.078 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "CaCl₂", coeff: 1, molarMass: 110.984 }] },
            { equation: "Ca + S → CaS", reactants: [{ name: "Ca", coeff: 1, molarMass: 40.078 }, { name: "S", coeff: 1, molarMass: 32.06 }], products: [{ name: "CaS", coeff: 1, molarMass: 72.138 }] }
        ]
    },
    {
        num: 21, symbol: "Sc", name: "Scandium", col: 3, row: 4, type: "transition", formula: "4Sc + 3O₂ → 2Sc₂O₃", usage: "Bicycle frames, baseball bats, aerospace alloy strengthening", molarMass: 44.956,
        formulas: [
            { equation: "4Sc + 3O₂ → 2Sc₂O₃", reactants: [{ name: "Sc", coeff: 4, molarMass: 44.956 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "Sc₂O₃", coeff: 2, molarMass: 137.910 }] },
            { equation: "2Sc + 3Cl₂ → 2ScCl₃", reactants: [{ name: "Sc", coeff: 2, molarMass: 44.956 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "ScCl₃", coeff: 2, molarMass: 151.314 }] },
            { equation: "2Sc + 3F₂ → 2ScF₃", reactants: [{ name: "Sc", coeff: 2, molarMass: 44.956 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "ScF₃", coeff: 2, molarMass: 101.951 }] }
        ]
    },
    {
        num: 22, symbol: "Ti", name: "Titanium", col: 4, row: 4, type: "transition", formula: "Ti + O₂ → TiO₂", usage: "Surgical implants, jet engines, white paint pigment (TiO₂)", molarMass: 47.867,
        formulas: [
            { equation: "Ti + O₂ → TiO₂", reactants: [{ name: "Ti", coeff: 1, molarMass: 47.867 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "TiO₂", coeff: 1, molarMass: 79.865 }] },
            { equation: "Ti + 2Cl₂ → TiCl₄", reactants: [{ name: "Ti", coeff: 1, molarMass: 47.867 }, { name: "Cl₂", coeff: 2, molarMass: 70.906 }], products: [{ name: "TiCl₄", coeff: 1, molarMass: 189.679 }] },
            { equation: "Ti + 2F₂ → TiF₄", reactants: [{ name: "Ti", coeff: 1, molarMass: 47.867 }, { name: "F₂", coeff: 2, molarMass: 37.996 }], products: [{ name: "TiF₄", coeff: 1, molarMass: 123.859 }] }
        ]
    },
    {
        num: 23, symbol: "V", name: "Vanadium", col: 5, row: 4, type: "transition", formula: "4V + 5O₂ → 2V₂O₅", usage: "Steel alloy toughening (hand tools, armor plating)", molarMass: 50.942,
        formulas: [
            { equation: "4V + 5O₂ → 2V₂O₅", reactants: [{ name: "V", coeff: 4, molarMass: 50.942 }, { name: "O₂", coeff: 5, molarMass: 31.998 }], products: [{ name: "V₂O₅", coeff: 2, molarMass: 181.880 }] },
            { equation: "2V + 3Cl₂ → 2VCl₃", reactants: [{ name: "V", coeff: 2, molarMass: 50.942 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "VCl₃", coeff: 2, molarMass: 157.301 }] },
            { equation: "2V + 5F₂ → 2VF₅", reactants: [{ name: "V", coeff: 2, molarMass: 50.942 }, { name: "F₂", coeff: 5, molarMass: 37.996 }], products: [{ name: "VF₅", coeff: 2, molarMass: 145.932 }] }
        ]
    },
    {
        num: 24, symbol: "Cr", name: "Chromium", col: 6, row: 4, type: "transition", formula: "4Cr + 3O₂ → 2Cr₂O₃", usage: "Stainless steel rust prevention, decorative chrome plating", molarMass: 51.996,
        formulas: [
            { equation: "4Cr + 3O₂ → 2Cr₂O₃", reactants: [{ name: "Cr", coeff: 4, molarMass: 51.996 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "Cr₂O₃", coeff: 2, molarMass: 151.990 }] },
            { equation: "2Cr + 3Cl₂ → 2CrCl₃", reactants: [{ name: "Cr", coeff: 2, molarMass: 51.996 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "CrCl₃", coeff: 2, molarMass: 158.355 }] },
            { equation: "Cr + 3F₂ → CrF₆", reactants: [{ name: "Cr", coeff: 1, molarMass: 51.996 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "CrF₆", coeff: 1, molarMass: 165.984 }] }
        ]
    },
    {
        num: 25, symbol: "Mn", name: "Manganese", col: 7, row: 4, type: "transition", formula: "Mn + O₂ → MnO₂", usage: "Steelmaking deoxidizer, household dry cell batteries", molarMass: 54.938,
        formulas: [
            { equation: "Mn + O₂ → MnO₂", reactants: [{ name: "Mn", coeff: 1, molarMass: 54.938 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "MnO₂", coeff: 1, molarMass: 86.936 }] },
            { equation: "Mn + Cl₂ → MnCl₂", reactants: [{ name: "Mn", coeff: 1, molarMass: 54.938 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "MnCl₂", coeff: 1, molarMass: 125.844 }] },
            { equation: "Mn + S → MnS", reactants: [{ name: "Mn", coeff: 1, molarMass: 54.938 }, { name: "S", coeff: 1, molarMass: 32.06 }], products: [{ name: "MnS", coeff: 1, molarMass: 86.998 }] }
        ]
    },
    {
        num: 26, symbol: "Fe", name: "Iron", col: 8, row: 4, type: "transition", formula: "4Fe + 3O₂ → 2Fe₂O₃", usage: "Structural steel, construction beams, hemoglobin in blood", molarMass: 55.845,
        formulas: [
            { equation: "4Fe + 3O₂ → 2Fe₂O₃", reactants: [{ name: "Fe", coeff: 4, molarMass: 55.845 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "Fe₂O₃", coeff: 2, molarMass: 159.688 }] },
            { equation: "Fe + Cl₂ → FeCl₂", reactants: [{ name: "Fe", coeff: 1, molarMass: 55.845 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "FeCl₂", coeff: 1, molarMass: 126.751 }] },
            { equation: "Fe + S → FeS", reactants: [{ name: "Fe", coeff: 1, molarMass: 55.845 }, { name: "S", coeff: 1, molarMass: 32.06 }], products: [{ name: "FeS", coeff: 1, molarMass: 87.905 }] }
        ]
    },
    {
        num: 27, symbol: "Co", name: "Cobalt", col: 9, row: 4, type: "transition", formula: "Co + Cl₂ → CoCl₂", usage: "EV battery cathodes, blue glass pigments, superalloys", molarMass: 58.933,
        formulas: [
            { equation: "Co + Cl₂ → CoCl₂", reactants: [{ name: "Co", coeff: 1, molarMass: 58.933 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "CoCl₂", coeff: 1, molarMass: 129.839 }] },
            { equation: "2Co + 3O₂ → 2CoO₂", reactants: [{ name: "Co", coeff: 2, molarMass: 58.933 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "CoO₂", coeff: 2, molarMass: 90.931 }] },
            { equation: "2Co + O₂ → 2CoO", reactants: [{ name: "Co", coeff: 2, molarMass: 58.933 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "CoO", coeff: 2, molarMass: 74.932 }] }
        ]
    },
    {
        num: 28, symbol: "Ni", name: "Nickel", col: 10, row: 4, type: "transition", formula: "2Ni + O₂ → 2NiO", usage: "Coins, stainless steel alloys, rechargeable NiCd batteries", molarMass: 58.693,
        formulas: [
            { equation: "2Ni + O₂ → 2NiO", reactants: [{ name: "Ni", coeff: 2, molarMass: 58.693 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "NiO", coeff: 2, molarMass: 74.692 }] },
            { equation: "Ni + Cl₂ → NiCl₂", reactants: [{ name: "Ni", coeff: 1, molarMass: 58.693 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "NiCl₂", coeff: 1, molarMass: 129.599 }] },
            { equation: "Ni + 4CO → Ni(CO)₄", reactants: [{ name: "Ni", coeff: 1, molarMass: 58.693 }, { name: "CO", coeff: 4, molarMass: 28.010 }], products: [{ name: "Ni(CO)₄", coeff: 1, molarMass: 170.733 }] }
        ]
    },
    {
        num: 29, symbol: "Cu", name: "Copper", col: 11, row: 4, type: "transition", formula: "2Cu + O₂ → 2CuO", usage: "Electrical wiring, circuit boards, plumbing pipes, cookware", molarMass: 63.546,
        formulas: [
            { equation: "2Cu + O₂ → 2CuO", reactants: [{ name: "Cu", coeff: 2, molarMass: 63.546 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "CuO", coeff: 2, molarMass: 79.545 }] },
            { equation: "Cu + Cl₂ → CuCl₂", reactants: [{ name: "Cu", coeff: 1, molarMass: 63.546 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "CuCl₂", coeff: 1, molarMass: 134.452 }] },
            { equation: "Cu + S → CuS", reactants: [{ name: "Cu", coeff: 1, molarMass: 63.546 }, { name: "S", coeff: 1, molarMass: 32.06 }], products: [{ name: "CuS", coeff: 1, molarMass: 95.606 }] }
        ]
    },
    {
        num: 30, symbol: "Zn", name: "Zinc", col: 12, row: 4, type: "transition", formula: "2Zn + O₂ → 2ZnO", usage: "Galvanizing steel against rust, brass metal, sunscreen (ZnO)", molarMass: 65.38,
        formulas: [
            { equation: "2Zn + O₂ → 2ZnO", reactants: [{ name: "Zn", coeff: 2, molarMass: 65.38 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "ZnO", coeff: 2, molarMass: 81.379 }] },
            { equation: "Zn + Cl₂ → ZnCl₂", reactants: [{ name: "Zn", coeff: 1, molarMass: 65.38 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "ZnCl₂", coeff: 1, molarMass: 136.286 }] },
            { equation: "Zn + S → ZnS", reactants: [{ name: "Zn", coeff: 1, molarMass: 65.38 }, { name: "S", coeff: 1, molarMass: 32.06 }], products: [{ name: "ZnS", coeff: 1, molarMass: 97.44 }] }
        ]
    },
    {
        num: 31, symbol: "Ga", name: "Gallium", col: 13, row: 4, type: "post-transition", formula: "4Ga + 3O₂ → 2Ga₂O₃", usage: "LED lights, Blu-ray lasers, high-efficiency solar cells", molarMass: 69.723,
        formulas: [
            { equation: "4Ga + 3O₂ → 2Ga₂O₃", reactants: [{ name: "Ga", coeff: 4, molarMass: 69.723 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "Ga₂O₃", coeff: 2, molarMass: 187.444 }] },
            { equation: "2Ga + 3Cl₂ → 2GaCl₃", reactants: [{ name: "Ga", coeff: 2, molarMass: 69.723 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "GaCl₃", coeff: 2, molarMass: 176.082 }] },
            { equation: "2Ga + 3F₂ → 2GaF₃", reactants: [{ name: "Ga", coeff: 2, molarMass: 69.723 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "GaF₃", coeff: 2, molarMass: 126.717 }] }
        ]
    },
    {
        num: 32, symbol: "Ge", name: "Germanium", col: 14, row: 4, type: "metalloid", formula: "Ge + O₂ → GeO₂", usage: "Fiber optic cables, night-vision thermal camera lenses", molarMass: 72.630,
        formulas: [
            { equation: "Ge + O₂ → GeO₂", reactants: [{ name: "Ge", coeff: 1, molarMass: 72.630 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "GeO₂", coeff: 1, molarMass: 104.628 }] },
            { equation: "Ge + 2Cl₂ → GeCl₄", reactants: [{ name: "Ge", coeff: 1, molarMass: 72.630 }, { name: "Cl₂", coeff: 2, molarMass: 70.906 }], products: [{ name: "GeCl₄", coeff: 1, molarMass: 214.442 }] },
            { equation: "Ge + 2F₂ → GeF₄", reactants: [{ name: "Ge", coeff: 1, molarMass: 72.630 }, { name: "F₂", coeff: 2, molarMass: 37.996 }], products: [{ name: "GeF₄", coeff: 1, molarMass: 148.622 }] }
        ]
    },
    {
        num: 33, symbol: "As", name: "Arsenic", col: 15, row: 4, type: "metalloid", formula: "4As + 3O₂ → 2As₂O₃", usage: "Semiconductor doping, wood preservatives, pest control", molarMass: 74.922,
        formulas: [
            { equation: "4As + 3O₂ → 2As₂O₃", reactants: [{ name: "As", coeff: 4, molarMass: 74.922 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "As₂O₃", coeff: 2, molarMass: 197.841 }] },
            { equation: "2As + 3Cl₂ → 2AsCl₃", reactants: [{ name: "As", coeff: 2, molarMass: 74.922 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "AsCl₃", coeff: 2, molarMass: 181.281 }] },
            { equation: "4As + 5O₂ → 2As₂O₅", reactants: [{ name: "As", coeff: 4, molarMass: 74.922 }, { name: "O₂", coeff: 5, molarMass: 31.998 }], products: [{ name: "As₂O₅", coeff: 2, molarMass: 229.839 }] }
        ]
    },
    {
        num: 34, symbol: "Se", name: "Selenium", col: 16, row: 4, type: "nonmetal", formula: "Se + O₂ → SeO₂", usage: "Photocopying drums, anti-dandruff shampoos, red glass tinting", molarMass: 78.971,
        formulas: [
            { equation: "Se + O₂ → SeO₂", reactants: [{ name: "Se", coeff: 1, molarMass: 78.971 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "SeO₂", coeff: 1, molarMass: 110.969 }] },
            { equation: "Se + 2Cl₂ → SeCl₄", reactants: [{ name: "Se", coeff: 1, molarMass: 78.971 }, { name: "Cl₂", coeff: 2, molarMass: 70.906 }], products: [{ name: "SeCl₄", coeff: 1, molarMass: 220.783 }] },
            { equation: "H₂ + Se → H₂Se", reactants: [{ name: "Se", coeff: 1, molarMass: 78.971 }, { name: "H₂", coeff: 1, molarMass: 2.016 }], products: [{ name: "H₂Se", coeff: 1, molarMass: 80.987 }] }
        ]
    },
    {
        num: 35, symbol: "Br", name: "Bromine", col: 17, row: 4, type: "halogen", formula: "2Na + Br₂ → 2NaBr", usage: "Flame retardants in electronics, water treatment, pharmaceuticals", molarMass: 79.904,
        formulas: [
            { equation: "H₂ + Br₂ → 2HBr", reactants: [{ name: "Br₂", coeff: 1, molarMass: 159.808 }, { name: "H₂", coeff: 1, molarMass: 2.016 }], products: [{ name: "HBr", coeff: 2, molarMass: 80.912 }] },
            { equation: "2Na + Br₂ → 2NaBr", reactants: [{ name: "Br₂", coeff: 1, molarMass: 159.808 }, { name: "Na", coeff: 2, molarMass: 22.990 }], products: [{ name: "NaBr", coeff: 2, molarMass: 102.894 }] },
            { equation: "2Al + 3Br₂ → 2AlBr₃", reactants: [{ name: "Br₂", coeff: 3, molarMass: 159.808 }, { name: "Al", coeff: 2, molarMass: 26.982 }], products: [{ name: "AlBr₃", coeff: 2, molarMass: 266.694 }] }
        ]
    },
    {
        num: 36, symbol: "Kr", name: "Krypton", col: 18, row: 4, type: "noble-gas", formula: "Kr + F₂ → KrF₂", usage: "Airport runway flash bulbs, high-performance insulated windows", molarMass: 83.798,
        formulas: [
            { equation: "Kr + F₂ → KrF₂", reactants: [{ name: "Kr", coeff: 1, molarMass: 83.798 }, { name: "F₂", coeff: 1, molarMass: 37.996 }], products: [{ name: "KrF₂", coeff: 1, molarMass: 121.794 }] },
            { equation: "KrF₂ → Kr + F₂", reactants: [{ name: "KrF₂", coeff: 1, molarMass: 121.794 }], products: [{ name: "Kr", coeff: 1, molarMass: 83.798 }, { name: "F₂", coeff: 1, molarMass: 37.996 }] },
            { equation: "2Kr + O₂ → 2KrO", reactants: [{ name: "Kr", coeff: 2, molarMass: 83.798 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "KrO", coeff: 2, molarMass: 99.797 }] }
        ]
    },

    // --- ROW 5 ---
    {
        num: 37, symbol: "Rb", name: "Rubidium", col: 1, row: 5, type: "alkali", formula: "2Rb + Cl₂ → 2RbCl", usage: "Atomic clocks, photocells, specialty glass manufacturing", molarMass: 85.468,
        formulas: [
            { equation: "2Rb + H₂ → 2RbH", reactants: [{ name: "Rb", coeff: 2, molarMass: 85.468 }, { name: "H₂", coeff: 1, molarMass: 2.016 }], products: [{ name: "RbH", coeff: 2, molarMass: 86.476 }] },
            { equation: "2Rb + Cl₂ → 2RbCl", reactants: [{ name: "Rb", coeff: 2, molarMass: 85.468 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "RbCl", coeff: 2, molarMass: 120.921 }] },
            { equation: "4Rb + O₂ → 2Rb₂O", reactants: [{ name: "Rb", coeff: 4, molarMass: 85.468 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "Rb₂O", coeff: 2, molarMass: 186.934 }] }
        ]
    },
    {
        num: 38, symbol: "Sr", name: "Strontium", col: 2, row: 5, type: "alkaline-earth", formula: "2Sr + O₂ → 2SrO", usage: "Red fireworks flares, glow-in-the-dark paints, tooth sensitivity gel", molarMass: 87.62,
        formulas: [
            { equation: "2Sr + O₂ → 2SrO", reactants: [{ name: "Sr", coeff: 2, molarMass: 87.62 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "SrO", coeff: 2, molarMass: 103.619 }] },
            { equation: "Sr + H₂ → SrH₂", reactants: [{ name: "Sr", coeff: 1, molarMass: 87.62 }, { name: "H₂", coeff: 1, molarMass: 2.016 }], products: [{ name: "SrH₂", coeff: 1, molarMass: 89.636 }] },
            { equation: "Sr + Cl₂ → SrCl₂", reactants: [{ name: "Sr", coeff: 1, molarMass: 87.62 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "SrCl₂", coeff: 1, molarMass: 158.526 }] }
        ]
    },
    {
        num: 39, symbol: "Y", name: "Yttrium", col: 3, row: 5, type: "transition", formula: "4Y + 3O₂ → 2Y₂O₃", usage: "YAG lasers, red TV phosphor displays, high-temp superconductors", molarMass: 88.906,
        formulas: [
            { equation: "4Y + 3O₂ → 2Y₂O₃", reactants: [{ name: "Y", coeff: 4, molarMass: 88.906 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "Y₂O₃", coeff: 2, molarMass: 225.810 }] },
            { equation: "2Y + 3Cl₂ → 2YCl₃", reactants: [{ name: "Y", coeff: 2, molarMass: 88.906 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "YCl₃", coeff: 2, molarMass: 195.265 }] },
            { equation: "2Y + 3F₂ → 2YF₃", reactants: [{ name: "Y", coeff: 2, molarMass: 88.906 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "YF₃", coeff: 2, molarMass: 145.900 }] }
        ]
    },
    {
        num: 40, symbol: "Zr", name: "Zirconium", col: 4, row: 5, type: "transition", formula: "Zr + O₂ → ZrO₂", usage: "Nuclear reactor fuel rods, synthetic cubic zirconia gems", molarMass: 91.224,
        formulas: [
            { equation: "Zr + O₂ → ZrO₂", reactants: [{ name: "Zr", coeff: 1, molarMass: 91.224 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "ZrO₂", coeff: 1, molarMass: 123.222 }] },
            { equation: "Zr + 2Cl₂ → ZrCl₄", reactants: [{ name: "Zr", coeff: 1, molarMass: 91.224 }, { name: "Cl₂", coeff: 2, molarMass: 70.906 }], products: [{ name: "ZrCl₄", coeff: 1, molarMass: 233.036 }] },
            { equation: "Zr + 2F₂ → ZrF₄", reactants: [{ name: "Zr", coeff: 1, molarMass: 91.224 }, { name: "F₂", coeff: 2, molarMass: 37.996 }], products: [{ name: "ZrF₄", coeff: 1, molarMass: 167.216 }] }
        ]
    },
    {
        num: 41, symbol: "Nb", name: "Niobium", col: 5, row: 5, type: "transition", formula: "4Nb + 5O₂ → 2Nb₂O₅", usage: "Superconducting magnets in MRI machines, rocket nozzles", molarMass: 92.906,
        formulas: [
            { equation: "4Nb + 5O₂ → 2Nb₂O₅", reactants: [{ name: "Nb", coeff: 4, molarMass: 92.906 }, { name: "O₂", coeff: 5, molarMass: 31.998 }], products: [{ name: "Nb₂O₅", coeff: 2, molarMass: 265.808 }] },
            { equation: "2Nb + 5Cl₂ → 2NbCl₅", reactants: [{ name: "Nb", coeff: 2, molarMass: 92.906 }, { name: "Cl₂", coeff: 5, molarMass: 70.906 }], products: [{ name: "NbCl₅", coeff: 2, molarMass: 270.171 }] },
            { equation: "2Nb + 5F₂ → 2NbF₅", reactants: [{ name: "Nb", coeff: 2, molarMass: 92.906 }, { name: "F₂", coeff: 5, molarMass: 37.996 }], products: [{ name: "NbF₅", coeff: 2, molarMass: 187.896 }] }
        ]
    },
    {
        num: 42, symbol: "Mo", name: "Molybdenum", col: 6, row: 5, type: "transition", formula: "Mo + 2S → MoS₂", usage: "High-temperature industrial lubricants, ultra-high-strength steel", molarMass: 95.95,
        formulas: [
            { equation: "2Mo + 3O₂ → 2MoO₃", reactants: [{ name: "Mo", coeff: 2, molarMass: 95.95 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "MoO₃", coeff: 2, molarMass: 143.947 }] },
            { equation: "Mo + 2S → MoS₂", reactants: [{ name: "Mo", coeff: 1, molarMass: 95.95 }, { name: "S", coeff: 2, molarMass: 32.06 }], products: [{ name: "MoS₂", coeff: 1, molarMass: 160.070 }] },
            { equation: "Mo + 3F₂ → MoF₆", reactants: [{ name: "Mo", coeff: 1, molarMass: 95.95 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "MoF₆", coeff: 1, molarMass: 209.938 }] }
        ]
    },
    {
        num: 43, symbol: "Tc", name: "Technetium", col: 7, row: 5, type: "transition", formula: "4Tc + 7O₂ → 2Tc₂O₇", usage: "Radioactive medical imaging tracers (Tc-99m bone/organ scans)", molarMass: 98,
        formulas: [
            { equation: "4Tc + 7O₂ → 2Tc₂O₇", reactants: [{ name: "Tc", coeff: 4, molarMass: 98 }, { name: "O₂", coeff: 7, molarMass: 31.998 }], products: [{ name: "Tc₂O₇", coeff: 2, molarMass: 307.993 }] },
            { equation: "Tc + 2Cl₂ → TcCl₄", reactants: [{ name: "Tc", coeff: 1, molarMass: 98 }, { name: "Cl₂", coeff: 2, molarMass: 70.906 }], products: [{ name: "TcCl₄", coeff: 1, molarMass: 239.812 }] },
            { equation: "2Tc + 3F₂ → 2TcF₃", reactants: [{ name: "Tc", coeff: 2, molarMass: 98 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "TcF₃", coeff: 2, molarMass: 154.994 }] }
        ]
    },
    {
        num: 44, symbol: "Ru", name: "Ruthenium", col: 8, row: 5, type: "transition", formula: "Ru + O₂ → RuO₂", usage: "Wear-resistant electrical contacts, chip resistor coatings", molarMass: 101.07,
        formulas: [
            { equation: "Ru + O₂ → RuO₂", reactants: [{ name: "Ru", coeff: 1, molarMass: 101.07 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "RuO₂", coeff: 1, molarMass: 133.068 }] },
            { equation: "2Ru + 3Cl₂ → 2RuCl₃", reactants: [{ name: "Ru", coeff: 2, molarMass: 101.07 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "RuCl₃", coeff: 2, molarMass: 207.429 }] },
            { equation: "Ru + 2O₂ → RuO₄", reactants: [{ name: "Ru", coeff: 1, molarMass: 101.07 }, { name: "O₂", coeff: 2, molarMass: 31.998 }], products: [{ name: "RuO₄", coeff: 1, molarMass: 165.066 }] }
        ]
    },
    {
        num: 45, symbol: "Rh", name: "Rhodium", col: 9, row: 5, type: "transition", formula: "2Rh + 3Cl₂ → 2RhCl₃", usage: "Automotive catalytic converters, high-reflectivity mirrors", molarMass: 102.91,
        formulas: [
            { equation: "2Rh + 3Cl₂ → 2RhCl₃", reactants: [{ name: "Rh", coeff: 2, molarMass: 102.91 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "RhCl₃", coeff: 2, molarMass: 209.269 }] },
            { equation: "4Rh + 3O₂ → 2Rh₂O₃", reactants: [{ name: "Rh", coeff: 4, molarMass: 102.91 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "Rh₂O₃", coeff: 2, molarMass: 253.814 }] },
            { equation: "2Rh + 3F₂ → 2RhF₃", reactants: [{ name: "Rh", coeff: 2, molarMass: 102.91 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "RhF₃", coeff: 2, molarMass: 159.904 }] }
        ]
    },
    {
        num: 46, symbol: "Pd", name: "Palladium", col: 10, row: 5, type: "transition", formula: "Pd + Cl₂ → PdCl₂", usage: "Exhaust catalytic converters, hydrogen purification filters", molarMass: 106.42,
        formulas: [
            { equation: "Pd + Cl₂ → PdCl₂", reactants: [{ name: "Pd", coeff: 1, molarMass: 106.42 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "PdCl₂", coeff: 1, molarMass: 177.326 }] },
            { equation: "2Pd + O₂ → 2PdO", reactants: [{ name: "Pd", coeff: 2, molarMass: 106.42 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "PdO", coeff: 2, molarMass: 122.419 }] },
            { equation: "Pd + 2F₂ → PdF₄", reactants: [{ name: "Pd", coeff: 1, molarMass: 106.42 }, { name: "F₂", coeff: 2, molarMass: 37.996 }], products: [{ name: "PdF₄", coeff: 1, molarMass: 182.412 }] }
        ]
    },
    {
        num: 47, symbol: "Ag", name: "Silver", col: 11, row: 5, type: "transition", formula: "2Ag + Cl₂ → 2AgCl", usage: "Solar panel contacts, jewelry, mirrors, antibacterial dressings", molarMass: 107.87,
        formulas: [
            { equation: "2Ag + Cl₂ → 2AgCl", reactants: [{ name: "Ag", coeff: 2, molarMass: 107.87 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "AgCl", coeff: 2, molarMass: 143.323 }] },
            { equation: "4Ag + O₂ → 2Ag₂O", reactants: [{ name: "Ag", coeff: 4, molarMass: 107.87 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "Ag₂O", coeff: 2, molarMass: 231.735 }] },
            { equation: "2Ag + F₂ → 2AgF", reactants: [{ name: "Ag", coeff: 2, molarMass: 107.87 }, { name: "F₂", coeff: 1, molarMass: 37.996 }], products: [{ name: "AgF", coeff: 2, molarMass: 126.868 }] }
        ]
    },
    {
        num: 48, symbol: "Cd", name: "Cadmium", col: 12, row: 5, type: "transition", formula: "Cd + S → CdS", usage: "Rechargeable NiCd batteries, yellow/orange paint pigments", molarMass: 112.41,
        formulas: [
            { equation: "Cd + S → CdS", reactants: [{ name: "Cd", coeff: 1, molarMass: 112.41 }, { name: "S", coeff: 1, molarMass: 32.06 }], products: [{ name: "CdS", coeff: 1, molarMass: 144.470 }] },
            { equation: "Cd + Cl₂ → CdCl₂", reactants: [{ name: "Cd", coeff: 1, molarMass: 112.41 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "CdCl₂", coeff: 1, molarMass: 183.316 }] },
            { equation: "2Cd + O₂ → 2CdO", reactants: [{ name: "Cd", coeff: 2, molarMass: 112.41 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "CdO", coeff: 2, molarMass: 128.409 }] }
        ]
    },
    {
        num: 49, symbol: "In", name: "Indium", col: 13, row: 5, type: "post-transition", formula: "4In + 3O₂ → 2In₂O₃", usage: "Touchscreen displays (Indium Tin Oxide), low-melt solders", molarMass: 114.82,
        formulas: [
            { equation: "4In + 3O₂ → 2In₂O₃", reactants: [{ name: "In", coeff: 4, molarMass: 114.82 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "In₂O₃", coeff: 2, molarMass: 277.634 }] },
            { equation: "2In + 3Cl₂ → 2InCl₃", reactants: [{ name: "In", coeff: 2, molarMass: 114.82 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "InCl₃", coeff: 2, molarMass: 221.179 }] },
            { equation: "2In + 3F₂ → 2InF₃", reactants: [{ name: "In", coeff: 2, molarMass: 114.82 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "InF₃", coeff: 2, molarMass: 171.814 }] }
        ]
    },
    {
        num: 50, symbol: "Sn", name: "Tin", col: 14, row: 5, type: "post-transition", formula: "Sn + O₂ → SnO₂", usage: "Solder for electronics, tin cans coating, bronze alloys", molarMass: 118.71,
        formulas: [
            { equation: "Sn + O₂ → SnO₂", reactants: [{ name: "Sn", coeff: 1, molarMass: 118.71 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "SnO₂", coeff: 1, molarMass: 150.708 }] },
            { equation: "Sn + 2Cl₂ → SnCl₄", reactants: [{ name: "Sn", coeff: 1, molarMass: 118.71 }, { name: "Cl₂", coeff: 2, molarMass: 70.906 }], products: [{ name: "SnCl₄", coeff: 1, molarMass: 260.522 }] },
            { equation: "Sn + Cl₂ → SnCl₂", reactants: [{ name: "Sn", coeff: 1, molarMass: 118.71 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "SnCl₂", coeff: 1, molarMass: 189.616 }] }
        ]
    },
    {
        num: 51, symbol: "Sb", name: "Antimony", col: 15, row: 5, type: "metalloid", formula: "4Sb + 3O₂ → 2Sb₂O₃", usage: "Flame retardant synergist, lead-acid battery hardening", molarMass: 121.76,
        formulas: [
            { equation: "4Sb + 3O₂ → 2Sb₂O₃", reactants: [{ name: "Sb", coeff: 4, molarMass: 121.76 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "Sb₂O₃", coeff: 2, molarMass: 291.517 }] },
            { equation: "2Sb + 3Cl₂ → 2SbCl₃", reactants: [{ name: "Sb", coeff: 2, molarMass: 121.76 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "SbCl₃", coeff: 2, molarMass: 228.119 }] },
            { equation: "2Sb + 5Cl₂ → 2SbCl₅", reactants: [{ name: "Sb", coeff: 2, molarMass: 121.76 }, { name: "Cl₂", coeff: 5, molarMass: 70.906 }], products: [{ name: "SbCl₅", coeff: 2, molarMass: 299.025 }] }
        ]
    },
    {
        num: 52, symbol: "Te", name: "Tellurium", col: 16, row: 5, type: "metalloid", formula: "Cd + Te → CdTe", usage: "Cadmium-Telluride solar panels, thermoelectric coolers", molarMass: 127.60,
        formulas: [
            { equation: "Te + O₂ → TeO₂", reactants: [{ name: "Te", coeff: 1, molarMass: 127.60 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "TeO₂", coeff: 1, molarMass: 159.598 }] },
            { equation: "Cd + Te → CdTe", reactants: [{ name: "Te", coeff: 1, molarMass: 127.60 }, { name: "Cd", coeff: 1, molarMass: 112.41 }], products: [{ name: "CdTe", coeff: 1, molarMass: 240.010 }] },
            { equation: "Te + 2Cl₂ → TeCl₄", reactants: [{ name: "Te", coeff: 1, molarMass: 127.60 }, { name: "Cl₂", coeff: 2, molarMass: 70.906 }], products: [{ name: "TeCl₄", coeff: 1, molarMass: 269.412 }] }
        ]
    },
    {
        num: 53, symbol: "I", name: "Iodine", col: 17, row: 5, type: "halogen", formula: "2K + I₂ → 2KI", usage: "Antiseptic wound disinfectants, thyroid health supplements", molarMass: 126.90,
        formulas: [
            { equation: "H₂ + I₂ → 2HI", reactants: [{ name: "I₂", coeff: 1, molarMass: 253.808 }, { name: "H₂", coeff: 1, molarMass: 2.016 }], products: [{ name: "HI", coeff: 2, molarMass: 127.912 }] },
            { equation: "2Na + I₂ → 2NaI", reactants: [{ name: "I₂", coeff: 1, molarMass: 253.808 }, { name: "Na", coeff: 2, molarMass: 22.990 }], products: [{ name: "NaI", coeff: 2, molarMass: 149.894 }] },
            { equation: "2Al + 3I₂ → 2AlI₃", reactants: [{ name: "I₂", coeff: 3, molarMass: 253.808 }, { name: "Al", coeff: 2, molarMass: 26.982 }], products: [{ name: "AlI₃", coeff: 2, molarMass: 407.694 }] }
        ]
    },
    {
        num: 54, symbol: "Xe", name: "Xenon", col: 18, row: 5, type: "noble-gas", formula: "Xe + F₂ → XeF₂", usage: "High-intensity camera flashes, ion propulsion thrusters in space", molarMass: 131.29,
        formulas: [
            { equation: "Xe + F₂ → XeF₂", reactants: [{ name: "Xe", coeff: 1, molarMass: 131.29 }, { name: "F₂", coeff: 1, molarMass: 37.996 }], products: [{ name: "XeF₂", coeff: 1, molarMass: 169.286 }] },
            { equation: "Xe + 2F₂ → XeF₄", reactants: [{ name: "Xe", coeff: 1, molarMass: 131.29 }, { name: "F₂", coeff: 2, molarMass: 37.996 }], products: [{ name: "XeF₄", coeff: 1, molarMass: 207.282 }] },
            { equation: "Xe + 3F₂ → XeF₆", reactants: [{ name: "Xe", coeff: 1, molarMass: 131.29 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "XeF₆", coeff: 1, molarMass: 245.278 }] }
        ]
    },

    // --- ROW 6 ---
    {
        num: 55, symbol: "Cs", name: "Cesium", col: 1, row: 6, type: "alkali", formula: "2Cs + Cl₂ → 2CsCl", usage: "Atomic timekeeping standards, oil well drilling fluids", molarMass: 132.91,
        formulas: [
            { equation: "2Cs + H₂ → 2CsH", reactants: [{ name: "Cs", coeff: 2, molarMass: 132.91 }, { name: "H₂", coeff: 1, molarMass: 2.016 }], products: [{ name: "CsH", coeff: 2, molarMass: 133.926 }] },
            { equation: "2Cs + Cl₂ → 2CsCl", reactants: [{ name: "Cs", coeff: 2, molarMass: 132.91 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "CsCl", coeff: 2, molarMass: 168.363 }] },
            { equation: "Cs + O₂ → CsO₂", reactants: [{ name: "Cs", coeff: 1, molarMass: 132.91 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "CsO₂", coeff: 1, molarMass: 164.908 }] }
        ]
    },
    {
        num: 56, symbol: "Ba", name: "Barium", col: 2, row: 6, type: "alkaline-earth", formula: "2Ba + O₂ → 2BaO", usage: "Medical GI tract X-ray imaging, green fireworks display", molarMass: 137.33,
        formulas: [
            { equation: "2Ba + O₂ → 2BaO", reactants: [{ name: "Ba", coeff: 2, molarMass: 137.33 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "BaO", coeff: 2, molarMass: 153.329 }] },
            { equation: "Ba + H₂ → BaH₂", reactants: [{ name: "Ba", coeff: 1, molarMass: 137.33 }, { name: "H₂", coeff: 1, molarMass: 2.016 }], products: [{ name: "BaH₂", coeff: 1, molarMass: 139.346 }] },
            { equation: "Ba + Cl₂ → BaCl₂", reactants: [{ name: "Ba", coeff: 1, molarMass: 137.33 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "BaCl₂", coeff: 1, molarMass: 208.236 }] }
        ]
    },
    {
        num: 72, symbol: "Hf", name: "Hafnium", col: 4, row: 6, type: "transition", formula: "Hf + O₂ → HfO₂", usage: "Nuclear submarine control rods, microchip gate insulators", molarMass: 178.49,
        formulas: [
            { equation: "Hf + O₂ → HfO₂", reactants: [{ name: "Hf", coeff: 1, molarMass: 178.49 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "HfO₂", coeff: 1, molarMass: 210.488 }] },
            { equation: "Hf + 2Cl₂ → HfCl₄", reactants: [{ name: "Hf", coeff: 1, molarMass: 178.49 }, { name: "Cl₂", coeff: 2, molarMass: 70.906 }], products: [{ name: "HfCl₄", coeff: 1, molarMass: 320.302 }] },
            { equation: "Hf + 2F₂ → HfF₄", reactants: [{ name: "Hf", coeff: 1, molarMass: 178.49 }, { name: "F₂", coeff: 2, molarMass: 37.996 }], products: [{ name: "HfF₄", coeff: 1, molarMass: 254.484 }] }
        ]
    },
    {
        num: 73, symbol: "Ta", name: "Tantalum", col: 5, row: 6, type: "transition", formula: "4Ta + 5O₂ → 2Ta₂O₅", usage: "Miniature capacitors in smartphones and compact electronics", molarMass: 180.95,
        formulas: [
            { equation: "4Ta + 5O₂ → 2Ta₂O₅", reactants: [{ name: "Ta", coeff: 4, molarMass: 180.95 }, { name: "O₂", coeff: 5, molarMass: 31.998 }], products: [{ name: "Ta₂O₅", coeff: 2, molarMass: 441.893 }] },
            { equation: "2Ta + 5Cl₂ → 2TaCl₅", reactants: [{ name: "Ta", coeff: 2, molarMass: 180.95 }, { name: "Cl₂", coeff: 5, molarMass: 70.906 }], products: [{ name: "TaCl₅", coeff: 2, molarMass: 358.213 }] },
            { equation: "2Ta + 5F₂ → 2TaF₅", reactants: [{ name: "Ta", coeff: 2, molarMass: 180.95 }, { name: "F₂", coeff: 5, molarMass: 37.996 }], products: [{ name: "TaF₅", coeff: 2, molarMass: 275.938 }] }
        ]
    },
    {
        num: 74, symbol: "W", name: "Tungsten", col: 6, row: 6, type: "transition", formula: "W + C → WC", usage: "Incandescent light bulb filaments, heavy-duty drill bits", molarMass: 183.84,
        formulas: [
            { equation: "2W + 3O₂ → 2WO₃", reactants: [{ name: "W", coeff: 2, molarMass: 183.84 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "WO₃", coeff: 2, molarMass: 231.837 }] },
            { equation: "W + C → WC", reactants: [{ name: "W", coeff: 1, molarMass: 183.84 }, { name: "C", coeff: 1, molarMass: 12.011 }], products: [{ name: "WC", coeff: 1, molarMass: 195.851 }] },
            { equation: "W + 3Cl₂ → WCl₆", reactants: [{ name: "W", coeff: 1, molarMass: 183.84 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "WCl₆", coeff: 1, molarMass: 396.558 }] }
        ]
    },
    {
        num: 75, symbol: "Re", name: "Rhenium", col: 7, row: 6, type: "transition", formula: "4Re + 7O₂ → 2Re₂O₇", usage: "Jet engine turbine blades, high-octane gasoline catalysts", molarMass: 186.21,
        formulas: [
            { equation: "4Re + 7O₂ → 2Re₂O₇", reactants: [{ name: "Re", coeff: 4, molarMass: 186.21 }, { name: "O₂", coeff: 7, molarMass: 31.998 }], products: [{ name: "Re₂O₇", coeff: 2, molarMass: 484.408 }] },
            { equation: "Re + 3F₂ → ReF₆", reactants: [{ name: "Re", coeff: 1, molarMass: 186.21 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "ReF₆", coeff: 1, molarMass: 300.198 }] },
            { equation: "2Re + 5Cl₂ → 2ReCl₅", reactants: [{ name: "Re", coeff: 2, molarMass: 186.21 }, { name: "Cl₂", coeff: 5, molarMass: 70.906 }], products: [{ name: "ReCl₅", coeff: 2, molarMass: 363.473 }] }
        ]
    },
    {
        num: 76, symbol: "Os", name: "Osmium", col: 8, row: 6, type: "transition", formula: "Os + 2O₂ → OsO₄", usage: "Fountain pen nib tips, fingerprint staining in forensics", molarMass: 190.23,
        formulas: [
            { equation: "Os + 2O₂ → OsO₄", reactants: [{ name: "Os", coeff: 1, molarMass: 190.23 }, { name: "O₂", coeff: 2, molarMass: 31.998 }], products: [{ name: "OsO₄", coeff: 1, molarMass: 254.226 }] },
            { equation: "Os + 2Cl₂ → OsCl₄", reactants: [{ name: "Os", coeff: 1, molarMass: 190.23 }, { name: "Cl₂", coeff: 2, molarMass: 70.906 }], products: [{ name: "OsCl₄", coeff: 1, molarMass: 332.042 }] },
            { equation: "Os + 3F₂ → OsF₆", reactants: [{ name: "Os", coeff: 1, molarMass: 190.23 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "OsF₆", coeff: 1, molarMass: 304.218 }] }
        ]
    },
    {
        num: 77, symbol: "Ir", name: "Iridium", col: 9, row: 6, type: "transition", formula: "Ir + O₂ → IrO₂", usage: "Spark plug tips, crucibles for growing single crystals", molarMass: 192.22,
        formulas: [
            { equation: "Ir + O₂ → IrO₂", reactants: [{ name: "Ir", coeff: 1, molarMass: 192.22 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "IrO₂", coeff: 1, molarMass: 224.218 }] },
            { equation: "2Ir + 3Cl₂ → 2IrCl₃", reactants: [{ name: "Ir", coeff: 2, molarMass: 192.22 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "IrCl₃", coeff: 2, molarMass: 298.579 }] },
            { equation: "Ir + 3F₂ → IrF₆", reactants: [{ name: "Ir", coeff: 1, molarMass: 192.22 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "IrF₆", coeff: 1, molarMass: 306.208 }] }
        ]
    },
    {
        num: 78, symbol: "Pt", name: "Platinum", col: 10, row: 6, type: "transition", formula: "Pt + Cl₂ → PtCl₂", usage: "Catalytic converters, lab equipment, chemotherapy drugs", molarMass: 195.08,
        formulas: [
            { equation: "Pt + Cl₂ → PtCl₂", reactants: [{ name: "Pt", coeff: 1, molarMass: 195.08 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "PtCl₂", coeff: 1, molarMass: 265.986 }] },
            { equation: "Pt + O₂ → PtO₂", reactants: [{ name: "Pt", coeff: 1, molarMass: 195.08 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "PtO₂", coeff: 1, molarMass: 227.078 }] },
            { equation: "Pt + 2F₂ → PtF₄", reactants: [{ name: "Pt", coeff: 1, molarMass: 195.08 }, { name: "F₂", coeff: 2, molarMass: 37.996 }], products: [{ name: "PtF₄", coeff: 1, molarMass: 271.072 }] }
        ]
    },
    {
        num: 79, symbol: "Au", name: "Gold", col: 11, row: 6, type: "transition", formula: "2Au + 3Cl₂ → 2AuCl₃", usage: "Jewelry, corruption-free space connectors, financial reserve", molarMass: 196.97,
        formulas: [
            { equation: "2Au + 3Cl₂ → 2AuCl₃", reactants: [{ name: "Au", coeff: 2, molarMass: 196.97 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "AuCl₃", coeff: 2, molarMass: 303.329 }] },
            { equation: "2Au + 3F₂ → 2AuF₃", reactants: [{ name: "Au", coeff: 2, molarMass: 196.97 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "AuF₃", coeff: 2, molarMass: 253.964 }] },
            { equation: "2Au + 3Br₂ → 2AuBr₃", reactants: [{ name: "Au", coeff: 2, molarMass: 196.97 }, { name: "Br₂", coeff: 3, molarMass: 159.808 }], products: [{ name: "AuBr₃", coeff: 2, molarMass: 436.682 }] }
        ]
    },
    {
        num: 80, symbol: "Hg", name: "Mercury", col: 12, row: 6, type: "transition", formula: "Hg + S → HgS", usage: "Thermometers, fluorescent lighting, tilt switches", molarMass: 200.59,
        formulas: [
            { equation: "2Hg + O₂ → 2HgO", reactants: [{ name: "Hg", coeff: 2, molarMass: 200.59 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "HgO", coeff: 2, molarMass: 216.589 }] },
            { equation: "Hg + S → HgS", reactants: [{ name: "Hg", coeff: 1, molarMass: 200.59 }, { name: "S", coeff: 1, molarMass: 32.06 }], products: [{ name: "HgS", coeff: 1, molarMass: 232.650 }] },
            { equation: "Hg + Cl₂ → HgCl₂", reactants: [{ name: "Hg", coeff: 1, molarMass: 200.59 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "HgCl₂", coeff: 1, molarMass: 271.496 }] }
        ]
    },
    {
        num: 81, symbol: "Tl", name: "Thallium", col: 13, row: 6, type: "post-transition", formula: "2Tl + Cl₂ → 2TlCl", usage: "Infrared optical lenses, low-melting glass manufacturing", molarMass: 204.38,
        formulas: [
            { equation: "2Tl + Cl₂ → 2TlCl", reactants: [{ name: "Tl", coeff: 2, molarMass: 204.38 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "TlCl", coeff: 2, molarMass: 239.833 }] },
            { equation: "4Tl + O₂ → 2Tl₂O", reactants: [{ name: "Tl", coeff: 4, molarMass: 204.38 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "Tl₂O", coeff: 2, molarMass: 424.758 }] },
            { equation: "2Tl + F₂ → 2TlF", reactants: [{ name: "Tl", coeff: 2, molarMass: 204.38 }, { name: "F₂", coeff: 1, molarMass: 37.996 }], products: [{ name: "TlF", coeff: 2, molarMass: 223.378 }] }
        ]
    },
    {
        num: 82, symbol: "Pb", name: "Lead", col: 14, row: 6, type: "post-transition", formula: "2Pb + O₂ → 2PbO", usage: "Car batteries, X-ray radiation shielding, cable jacketing", molarMass: 207.2,
        formulas: [
            { equation: "2Pb + O₂ → 2PbO", reactants: [{ name: "Pb", coeff: 2, molarMass: 207.2 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "PbO", coeff: 2, molarMass: 223.199 }] },
            { equation: "Pb + Cl₂ → PbCl₂", reactants: [{ name: "Pb", coeff: 1, molarMass: 207.2 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "PbCl₂", coeff: 1, molarMass: 278.106 }] },
            { equation: "Pb + S → PbS", reactants: [{ name: "Pb", coeff: 1, molarMass: 207.2 }, { name: "S", coeff: 1, molarMass: 32.06 }], products: [{ name: "PbS", coeff: 1, molarMass: 239.26 }] }
        ]
    },
    {
        num: 83, symbol: "Bi", name: "Bismuth", col: 15, row: 6, type: "post-transition", formula: "4Bi + 3O₂ → 2Bi₂O₃", usage: "Stomach medication (Pepto-Bismol), non-toxic lead substitutes", molarMass: 208.98,
        formulas: [
            { equation: "4Bi + 3O₂ → 2Bi₂O₃", reactants: [{ name: "Bi", coeff: 4, molarMass: 208.98 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "Bi₂O₃", coeff: 2, molarMass: 465.957 }] },
            { equation: "2Bi + 3Cl₂ → 2BiCl₃", reactants: [{ name: "Bi", coeff: 2, molarMass: 208.98 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "BiCl₃", coeff: 2, molarMass: 315.333 }] },
            { equation: "2Bi + 3F₂ → 2BiF₃", reactants: [{ name: "Bi", coeff: 2, molarMass: 208.98 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "BiF₃", coeff: 2, molarMass: 265.974 }] }
        ]
    },
    {
        num: 84, symbol: "Po", name: "Polonium", col: 16, row: 6, type: "post-transition", formula: "Po + O₂ → PoO₂", usage: "Antistatic brushes for film, thermoelectric power in satellites", molarMass: 209,
        formulas: [
            { equation: "Po + O₂ → PoO₂", reactants: [{ name: "Po", coeff: 1, molarMass: 209 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "PoO₂", coeff: 1, molarMass: 240.998 }] },
            { equation: "Po + 2Cl₂ → PoCl₄", reactants: [{ name: "Po", coeff: 1, molarMass: 209 }, { name: "Cl₂", coeff: 2, molarMass: 70.906 }], products: [{ name: "PoCl₄", coeff: 1, molarMass: 350.812 }] },
            { equation: "H₂ + Po → H₂Po", reactants: [{ name: "Po", coeff: 1, molarMass: 209 }, { name: "H₂", coeff: 1, molarMass: 2.016 }], products: [{ name: "H₂Po", coeff: 1, molarMass: 211.016 }] }
        ]
    },
    {
        num: 85, symbol: "At", name: "Astatine", col: 17, row: 6, type: "halogen", formula: "H₂ + At₂ → 2HAt", usage: "Experimental targeted alpha-particle cancer therapy", molarMass: 210,
        formulas: [
            { equation: "H₂ + At₂ → 2HAt", reactants: [{ name: "At₂", coeff: 1, molarMass: 420 }, { name: "H₂", coeff: 1, molarMass: 2.016 }], products: [{ name: "HAt", coeff: 2, molarMass: 211.008 }] },
            { equation: "2Na + At₂ → 2NaAt", reactants: [{ name: "At₂", coeff: 1, molarMass: 420 }, { name: "Na", coeff: 2, molarMass: 22.990 }], products: [{ name: "NaAt", coeff: 2, molarMass: 232.990 }] },
            { equation: "2At + 3Cl₂ → 2AtCl₃", reactants: [{ name: "At", coeff: 2, molarMass: 210 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "AtCl₃", coeff: 2, molarMass: 316.359 }] }
        ]
    },
    {
        num: 86, symbol: "Rn", name: "Radon", col: 18, row: 6, type: "noble-gas", formula: "Rn + F₂ → RnF₂", usage: "Historical radiation cancer therapy, hydrological tracking", molarMass: 222,
        formulas: [
            { equation: "Rn + F₂ → RnF₂", reactants: [{ name: "Rn", coeff: 1, molarMass: 222 }, { name: "F₂", coeff: 1, molarMass: 37.996 }], products: [{ name: "RnF₂", coeff: 1, molarMass: 259.996 }] },
            { equation: "RnF₂ → Rn + F₂", reactants: [{ name: "RnF₂", coeff: 1, molarMass: 259.996 }], products: [{ name: "Rn", coeff: 1, molarMass: 222 }, { name: "F₂", coeff: 1, molarMass: 37.996 }] },
            { equation: "2Rn + O₂ → 2RnO", reactants: [{ name: "Rn", coeff: 2, molarMass: 222 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "RnO", coeff: 2, molarMass: 237.997 }] }
        ]
    },

    // --- ROW 7 ---
    {
        num: 87, symbol: "Fr", name: "Francium", col: 1, row: 7, type: "alkali", formula: "2Fr + Cl₂ → 2FrCl", usage: "Basic atomic subatomic structure research (extremely rare)", molarMass: 223,
        formulas: [
            { equation: "2Fr + H₂ → 2FrH", reactants: [{ name: "Fr", coeff: 2, molarMass: 223 }, { name: "H₂", coeff: 1, molarMass: 2.016 }], products: [{ name: "FrH", coeff: 2, molarMass: 224.016 }] },
            { equation: "2Fr + Cl₂ → 2FrCl", reactants: [{ name: "Fr", coeff: 2, molarMass: 223 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "FrCl", coeff: 2, molarMass: 258.453 }] },
            { equation: "4Fr + O₂ → 2Fr₂O", reactants: [{ name: "Fr", coeff: 4, molarMass: 223 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "Fr₂O", coeff: 2, molarMass: 461.998 }] }
        ]
    },
    {
        num: 88, symbol: "Ra", name: "Radium", col: 2, row: 7, type: "alkaline-earth", formula: "Ra + Cl₂ → RaCl₂", usage: "Former luminous watch dials, targeted bone cancer treatments", molarMass: 226,
        formulas: [
            { equation: "2Ra + O₂ → 2RaO", reactants: [{ name: "Ra", coeff: 2, molarMass: 226 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "RaO", coeff: 2, molarMass: 241.999 }] },
            { equation: "Ra + H₂ → RaH₂", reactants: [{ name: "Ra", coeff: 1, molarMass: 226 }, { name: "H₂", coeff: 1, molarMass: 2.016 }], products: [{ name: "RaH₂", coeff: 1, molarMass: 228.016 }] },
            { equation: "Ra + Cl₂ → RaCl₂", reactants: [{ name: "Ra", coeff: 1, molarMass: 226 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "RaCl₂", coeff: 1, molarMass: 296.906 }] }
        ]
    },
    {
        num: 104, symbol: "Rf", name: "Rutherfordium", col: 4, row: 7, type: "transition", formula: "Rf + 2Cl₂ → RfCl₄", usage: "Purely scientific research (synthetic superheavy element)", molarMass: 267,
        formulas: [
            { equation: "Rf + 2Cl₂ → RfCl₄", reactants: [{ name: "Rf", coeff: 1, molarMass: 267 }, { name: "Cl₂", coeff: 2, molarMass: 70.906 }], products: [{ name: "RfCl₄", coeff: 1, molarMass: 408.812 }] },
            { equation: "Rf + O₂ → RfO₂", reactants: [{ name: "Rf", coeff: 1, molarMass: 267 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "RfO₂", coeff: 1, molarMass: 298.998 }] },
            { equation: "Rf + 2F₂ → RfF₄", reactants: [{ name: "Rf", coeff: 1, molarMass: 267 }, { name: "F₂", coeff: 2, molarMass: 37.996 }], products: [{ name: "RfF₄", coeff: 1, molarMass: 342.992 }] }
        ]
    },
    {
        num: 105, symbol: "Db", name: "Dubnium", col: 5, row: 7, type: "transition", formula: "2Db + 5Cl₂ → 2DbCl₅", usage: "Purely scientific research (synthetic superheavy element)", molarMass: 268,
        formulas: [
            { equation: "2Db + 5Cl₂ → 2DbCl₅", reactants: [{ name: "Db", coeff: 2, molarMass: 268 }, { name: "Cl₂", coeff: 5, molarMass: 70.906 }], products: [{ name: "DbCl₅", coeff: 2, molarMass: 445.265 }] },
            { equation: "4Db + 5O₂ → 2Db₂O₅", reactants: [{ name: "Db", coeff: 4, molarMass: 268 }, { name: "O₂", coeff: 5, molarMass: 31.998 }], products: [{ name: "Db₂O₅", coeff: 2, molarMass: 615.994 }] },
            { equation: "2Db + 5F₂ → 2DbF₅", reactants: [{ name: "Db", coeff: 2, molarMass: 268 }, { name: "F₂", coeff: 5, molarMass: 37.996 }], products: [{ name: "DbF₅", coeff: 2, molarMass: 362.990 }] }
        ]
    },
    {
        num: 106, symbol: "Sg", name: "Seaborgium", col: 6, row: 7, type: "transition", formula: "Sg + 3O₂ → SgO₃", usage: "Purely scientific research (synthetic superheavy element)", molarMass: 269,
        formulas: [
            { equation: "Sg + 3F₂ → SgF₆", reactants: [{ name: "Sg", coeff: 1, molarMass: 269 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "SgF₆", coeff: 1, molarMass: 382.988 }] },
            { equation: "Sg + 3O₂ → SgO₃", reactants: [{ name: "Sg", coeff: 1, molarMass: 269 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "SgO₃", coeff: 1, molarMass: 316.997 }] },
            { equation: "Sg + 2Cl₂ → SgCl₄", reactants: [{ name: "Sg", coeff: 1, molarMass: 269 }, { name: "Cl₂", coeff: 2, molarMass: 70.906 }], products: [{ name: "SgCl₄", coeff: 1, molarMass: 410.812 }] }
        ]
    },
    {
        num: 107, symbol: "Bh", name: "Bohrium", col: 7, row: 7, type: "transition", formula: "2Bh + 3O₂ → 2BhO₃", usage: "Purely scientific research (synthetic superheavy element)", molarMass: 270,
        formulas: [
            { equation: "2Bh + 3F₂ → 2BhF₃", reactants: [{ name: "Bh", coeff: 2, molarMass: 270 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "BhF₃", coeff: 2, molarMass: 326.994 }] },
            { equation: "2Bh + 3O₂ → 2BhO₃", reactants: [{ name: "Bh", coeff: 2, molarMass: 270 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "BhO₃", coeff: 2, molarMass: 317.997 }] },
            { equation: "2Bh + 3Cl₂ → 2BhCl₃", reactants: [{ name: "Bh", coeff: 2, molarMass: 270 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "BhCl₃", coeff: 2, molarMass: 376.359 }] }
        ]
    },
    {
        num: 108, symbol: "Hs", name: "Hassium", col: 8, row: 7, type: "transition", formula: "Hs + 2O₂ → HsO₄", usage: "Purely scientific research (synthetic superheavy element)", molarMass: 269,
        formulas: [
            { equation: "Hs + 2O₂ → HsO₄", reactants: [{ name: "Hs", coeff: 1, molarMass: 269 }, { name: "O₂", coeff: 2, molarMass: 31.998 }], products: [{ name: "HsO₄", coeff: 1, molarMass: 332.996 }] },
            { equation: "Hs + 2Cl₂ → HsCl₄", reactants: [{ name: "Hs", coeff: 1, molarMass: 269 }, { name: "Cl₂", coeff: 2, molarMass: 70.906 }], products: [{ name: "HsCl₄", coeff: 1, molarMass: 410.812 }] },
            { equation: "Hs + 3F₂ → HsF₆", reactants: [{ name: "Hs", coeff: 1, molarMass: 269 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "HsF₆", coeff: 1, molarMass: 382.988 }] }
        ]
    },
    {
        num: 109, symbol: "Mt", name: "Meitnerium", col: 9, row: 7, type: "transition", formula: "Mt + O₂ → MtO₂", usage: "Purely scientific research (synthetic superheavy element)", molarMass: 278,
        formulas: [
            { equation: "2Mt + 3F₂ → 2MtF₃", reactants: [{ name: "Mt", coeff: 2, molarMass: 278 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "MtF₃", coeff: 2, molarMass: 334.994 }] },
            { equation: "2Mt + 3Cl₂ → 2MtCl₃", reactants: [{ name: "Mt", coeff: 2, molarMass: 278 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "MtCl₃", coeff: 2, molarMass: 384.359 }] },
            { equation: "Mt + O₂ → MtO₂", reactants: [{ name: "Mt", coeff: 1, molarMass: 278 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "MtO₂", coeff: 1, molarMass: 309.998 }] }
        ]
    },
    {
        num: 110, symbol: "Ds", name: "Darmstadtium", col: 10, row: 7, type: "transition", formula: "Ds + 2Cl₂ → DsCl₄", usage: "Purely scientific research (synthetic superheavy element)", molarMass: 281,
        formulas: [
            { equation: "2Ds + O₂ → 2DsO", reactants: [{ name: "Ds", coeff: 2, molarMass: 281 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "DsO", coeff: 2, molarMass: 296.999 }] },
            { equation: "Ds + 2Cl₂ → DsCl₄", reactants: [{ name: "Ds", coeff: 1, molarMass: 281 }, { name: "Cl₂", coeff: 2, molarMass: 70.906 }], products: [{ name: "DsCl₄", coeff: 1, molarMass: 422.812 }] },
            { equation: "Ds + 3F₂ → DsF₆", reactants: [{ name: "Ds", coeff: 1, molarMass: 281 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "DsF₆", coeff: 1, molarMass: 394.988 }] }
        ]
    },
    {
        num: 111, symbol: "Rg", name: "Roentgenium", col: 11, row: 7, type: "transition", formula: "2Rg + 3Cl₂ → 2RgCl₃", usage: "Purely scientific research (synthetic superheavy element)", molarMass: 282,
        formulas: [
            { equation: "2Rg + Cl₂ → 2RgCl", reactants: [{ name: "Rg", coeff: 2, molarMass: 282 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "RgCl", coeff: 2, molarMass: 317.453 }] },
            { equation: "2Rg + 3Cl₂ → 2RgCl₃", reactants: [{ name: "Rg", coeff: 2, molarMass: 282 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "RgCl₃", coeff: 2, molarMass: 388.359 }] },
            { equation: "2Rg + 3F₂ → 2RgF₃", reactants: [{ name: "Rg", coeff: 2, molarMass: 282 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "RgF₃", coeff: 2, molarMass: 338.994 }] }
        ]
    },
    {
        num: 112, symbol: "Cn", name: "Copernicium", col: 12, row: 7, type: "transition", formula: "Cn + Cl₂ → CnCl₂", usage: "Purely scientific research (synthetic superheavy element)", molarMass: 285,
        formulas: [
            { equation: "2Cn + O₂ → 2CnO", reactants: [{ name: "Cn", coeff: 2, molarMass: 285 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "CnO", coeff: 2, molarMass: 300.999 }] },
            { equation: "Cn + Cl₂ → CnCl₂", reactants: [{ name: "Cn", coeff: 1, molarMass: 285 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "CnCl₂", coeff: 1, molarMass: 355.906 }] },
            { equation: "Cn + O₂ → CnO₂", reactants: [{ name: "Cn", coeff: 1, molarMass: 285 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "CnO₂", coeff: 1, molarMass: 316.998 }] }
        ]
    },
    {
        num: 113, symbol: "Nh", name: "Nihonium", col: 13, row: 7, type: "post-transition", formula: "2Nh + Cl₂ → 2NhCl", usage: "Purely scientific research (synthetic superheavy element)", molarMass: 286,
        formulas: [
            { equation: "4Nh + 3O₂ → 2Nh₂O₃", reactants: [{ name: "Nh", coeff: 4, molarMass: 286 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "Nh₂O₃", coeff: 2, molarMass: 619.994 }] },
            { equation: "2Nh + Cl₂ → 2NhCl", reactants: [{ name: "Nh", coeff: 2, molarMass: 286 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "NhCl", coeff: 2, molarMass: 321.453 }] },
            { equation: "2Nh + 3F₂ → 2NhF₃", reactants: [{ name: "Nh", coeff: 2, molarMass: 286 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "NhF₃", coeff: 2, molarMass: 342.994 }] }
        ]
    },
    {
        num: 114, symbol: "Fl", name: "Flerovium", col: 14, row: 7, type: "post-transition", formula: "Fl + O₂ → FlO₂", usage: "Purely scientific research (synthetic superheavy element)", molarMass: 289,
        formulas: [
            { equation: "2Fl + O₂ → 2FlO", reactants: [{ name: "Fl", coeff: 2, molarMass: 289 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "FlO", coeff: 2, molarMass: 304.999 }] },
            { equation: "Fl + 2Cl₂ → FlCl₄", reactants: [{ name: "Fl", coeff: 1, molarMass: 289 }, { name: "Cl₂", coeff: 2, molarMass: 70.906 }], products: [{ name: "FlCl₄", coeff: 1, molarMass: 430.812 }] },
            { equation: "Fl + O₂ → FlO₂", reactants: [{ name: "Fl", coeff: 1, molarMass: 289 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "FlO₂", coeff: 1, molarMass: 320.998 }] }
        ]
    },
    {
        num: 115, symbol: "Mc", name: "Moscovium", col: 15, row: 7, type: "post-transition", formula: "2Mc + Cl₂ → 2McCl", usage: "Purely scientific research (synthetic superheavy element)", molarMass: 289,
        formulas: [
            { equation: "4Mc + 3O₂ → 2Mc₂O₃", reactants: [{ name: "Mc", coeff: 4, molarMass: 289 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "Mc₂O₃", coeff: 2, molarMass: 625.994 }] },
            { equation: "2Mc + Cl₂ → 2McCl", reactants: [{ name: "Mc", coeff: 2, molarMass: 289 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "McCl", coeff: 2, molarMass: 324.453 }] },
            { equation: "2Mc + 3Cl₂ → 2McCl₃", reactants: [{ name: "Mc", coeff: 2, molarMass: 289 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "McCl₃", coeff: 2, molarMass: 395.359 }] }
        ]
    },
    {
        num: 116, symbol: "Lv", name: "Livermorium", col: 16, row: 7, type: "post-transition", formula: "Lv + O₂ → LvO₂", usage: "Purely scientific research (synthetic superheavy element)", molarMass: 293,
        formulas: [
            { equation: "2Lv + O₂ → 2LvO", reactants: [{ name: "Lv", coeff: 2, molarMass: 293 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "LvO", coeff: 2, molarMass: 308.999 }] },
            { equation: "Lv + 2Cl₂ → LvCl₄", reactants: [{ name: "Lv", coeff: 1, molarMass: 293 }, { name: "Cl₂", coeff: 2, molarMass: 70.906 }], products: [{ name: "LvCl₄", coeff: 1, molarMass: 434.812 }] },
            { equation: "Lv + O₂ → LvO₂", reactants: [{ name: "Lv", coeff: 1, molarMass: 293 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "LvO₂", coeff: 1, molarMass: 324.998 }] }
        ]
    },
    {
        num: 117, symbol: "Ts", name: "Tennessine", col: 17, row: 7, type: "halogen", formula: "H₂ + Ts₂ → 2HTs", usage: "Purely scientific research (synthetic superheavy element)", molarMass: 294,
        formulas: [
            { equation: "2Na + Ts₂ → 2NaTs", reactants: [{ name: "Ts₂", coeff: 1, molarMass: 588 }, { name: "Na", coeff: 2, molarMass: 22.990 }], products: [{ name: "NaTs", coeff: 2, molarMass: 316.990 }] },
            { equation: "H₂ + Ts₂ → 2HTs", reactants: [{ name: "Ts₂", coeff: 1, molarMass: 588 }, { name: "H₂", coeff: 1, molarMass: 2.016 }], products: [{ name: "HTs", coeff: 2, molarMass: 295.008 }] },
            { equation: "2K + Ts₂ → 2KTs", reactants: [{ name: "Ts₂", coeff: 1, molarMass: 588 }, { name: "K", coeff: 2, molarMass: 39.098 }], products: [{ name: "KTs", coeff: 2, molarMass: 333.098 }] }
        ]
    },
    {
        num: 118, symbol: "Og", name: "Oganesson", col: 18, row: 7, type: "noble-gas", formula: "Og + 2F₂ → OgF₄", usage: "Purely scientific research (synthetic superheavy element)", molarMass: 294,
        formulas: [
            { equation: "2Og + O₂ → 2OgO", reactants: [{ name: "Og", coeff: 2, molarMass: 294 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "OgO", coeff: 2, molarMass: 309.999 }] },
            { equation: "Og + 2F₂ → OgF₄", reactants: [{ name: "Og", coeff: 1, molarMass: 294 }, { name: "F₂", coeff: 2, molarMass: 37.996 }], products: [{ name: "OgF₄", coeff: 1, molarMass: 369.992 }] },
            { equation: "Og + 3F₂ → OgF₆", reactants: [{ name: "Og", coeff: 1, molarMass: 294 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "OgF₆", coeff: 1, molarMass: 407.988 }] }
        ]
    },

    // --- LANTHANIDES (ROW 9) ---
    {
        num: 57, symbol: "La", name: "Lanthanum", col: 3, row: 9, type: "lanthanide", formula: "4La + 3O₂ → 2La₂O₃", usage: "Camera studio lenses, hybrid battery electrodes, studio lighting", molarMass: 138.91,
        formulas: [
            { equation: "4La + 3O₂ → 2La₂O₃", reactants: [{ name: "La", coeff: 4, molarMass: 138.91 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "La₂O₃", coeff: 2, molarMass: 325.817 }] },
            { equation: "2La + 3Cl₂ → 2LaCl₃", reactants: [{ name: "La", coeff: 2, molarMass: 138.91 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "LaCl₃", coeff: 2, molarMass: 245.269 }] },
            { equation: "2La + 3F₂ → 2LaF₃", reactants: [{ name: "La", coeff: 2, molarMass: 138.91 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "LaF₃", coeff: 2, molarMass: 195.904 }] }
        ]
    },
    {
        num: 58, symbol: "Ce", name: "Cerium", col: 4, row: 9, type: "lanthanide", formula: "Ce + O₂ → CeO₂", usage: "Glass polishing powder, self-cleaning ovens, lighter flints", molarMass: 140.12,
        formulas: [
            { equation: "Ce + O₂ → CeO₂", reactants: [{ name: "Ce", coeff: 1, molarMass: 140.12 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "CeO₂", coeff: 1, molarMass: 172.118 }] },
            { equation: "2Ce + 3Cl₂ → 2CeCl₃", reactants: [{ name: "Ce", coeff: 2, molarMass: 140.12 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "CeCl₃", coeff: 2, molarMass: 246.479 }] },
            { equation: "2Ce + 3F₂ → 2CeF₃", reactants: [{ name: "Ce", coeff: 2, molarMass: 140.12 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "CeF₃", coeff: 2, molarMass: 197.114 }] }
        ]
    },
    {
        num: 59, symbol: "Pr", name: "Praseodymium", col: 5, row: 9, type: "lanthanide", formula: "12Pr + 11O₂ → 2Pr₆O₁₁", usage: "Didymium safety goggles for glassblowers, yellow glass stain", molarMass: 140.91,
        formulas: [
            { equation: "12Pr + 11O₂ → 2Pr₆O₁₁", reactants: [{ name: "Pr", coeff: 12, molarMass: 140.91 }, { name: "O₂", coeff: 11, molarMass: 31.998 }], products: [{ name: "Pr₆O₁₁", coeff: 2, molarMass: 1021.438 }] },
            { equation: "2Pr + 3Cl₂ → 2PrCl₃", reactants: [{ name: "Pr", coeff: 2, molarMass: 140.91 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "PrCl₃", coeff: 2, molarMass: 247.269 }] },
            { equation: "2Pr + 3F₂ → 2PrF₃", reactants: [{ name: "Pr", coeff: 2, molarMass: 140.91 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "PrF₃", coeff: 2, molarMass: 197.904 }] }
        ]
    },
    {
        num: 60, symbol: "Nd", name: "Neodymium", col: 6, row: 9, type: "lanthanide", formula: "4Nd + 3O₂ → 2Nd₂O₃", usage: "Ultra-strong permanent magnets (headphones, hard drives, EVs)", molarMass: 144.24,
        formulas: [
            { equation: "4Nd + 3O₂ → 2Nd₂O₃", reactants: [{ name: "Nd", coeff: 4, molarMass: 144.24 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "Nd₂O₃", coeff: 2, molarMass: 336.477 }] },
            { equation: "2Nd + 3Cl₂ → 2NdCl₃", reactants: [{ name: "Nd", coeff: 2, molarMass: 144.24 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "NdCl₃", coeff: 2, molarMass: 250.599 }] },
            { equation: "2Nd + 3F₂ → 2NdF₃", reactants: [{ name: "Nd", coeff: 2, molarMass: 144.24 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "NdF₃", coeff: 2, molarMass: 201.234 }] }
        ]
    },
    {
        num: 61, symbol: "Pm", name: "Promethium", col: 7, row: 9, type: "lanthanide", formula: "2Pm + 3Cl₂ → 2PmCl₃", usage: "Atomic nuclear batteries for guided missiles and pacemakers", molarMass: 145,
        formulas: [
            { equation: "4Pm + 3O₂ → 2Pm₂O₃", reactants: [{ name: "Pm", coeff: 4, molarMass: 145 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "Pm₂O₃", coeff: 2, molarMass: 337.994 }] },
            { equation: "2Pm + 3Cl₂ → 2PmCl₃", reactants: [{ name: "Pm", coeff: 2, molarMass: 145 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "PmCl₃", coeff: 2, molarMass: 251.359 }] },
            { equation: "2Pm + 3F₂ → 2PmF₃", reactants: [{ name: "Pm", coeff: 2, molarMass: 145 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "PmF₃", coeff: 2, molarMass: 201.994 }] }
        ]
    },
    {
        num: 62, symbol: "Sm", name: "Samarium", col: 8, row: 9, type: "lanthanide", formula: "4Sm + 3O₂ → 2Sm₂O₃", usage: "High-temperature resistant magnets, cancer pain treatment", molarMass: 150.36,
        formulas: [
            { equation: "4Sm + 3O₂ → 2Sm₂O₃", reactants: [{ name: "Sm", coeff: 4, molarMass: 150.36 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "Sm₂O₃", coeff: 2, molarMass: 348.717 }] },
            { equation: "2Sm + 3Cl₂ → 2SmCl₃", reactants: [{ name: "Sm", coeff: 2, molarMass: 150.36 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "SmCl₃", coeff: 2, molarMass: 256.719 }] },
            { equation: "2Sm + 3F₂ → 2SmF₃", reactants: [{ name: "Sm", coeff: 2, molarMass: 150.36 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "SmF₃", coeff: 2, molarMass: 207.354 }] }
        ]
    },
    {
        num: 63, symbol: "Eu", name: "Europium", col: 9, row: 9, type: "lanthanide", formula: "4Eu + 3O₂ → 2Eu₂O₃", usage: "Euro banknote anti-counterfeiting phosphors, red TV displays", molarMass: 151.96,
        formulas: [
            { equation: "4Eu + 3O₂ → 2Eu₂O₃", reactants: [{ name: "Eu", coeff: 4, molarMass: 151.96 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "Eu₂O₃", coeff: 2, molarMass: 351.917 }] },
            { equation: "2Eu + 3Cl₂ → 2EuCl₃", reactants: [{ name: "Eu", coeff: 2, molarMass: 151.96 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "EuCl₃", coeff: 2, molarMass: 258.319 }] },
            { equation: "2Eu + 3F₂ → 2EuF₃", reactants: [{ name: "Eu", coeff: 2, molarMass: 151.96 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "EuF₃", coeff: 2, molarMass: 208.954 }] }
        ]
    },
    {
        num: 64, symbol: "Gd", name: "Gadolinium", col: 10, row: 9, type: "lanthanide", formula: "4Gd + 3O₂ → 2Gd₂O₃", usage: "MRI intravenous contrast dye agents, neutron radiography", molarMass: 157.25,
        formulas: [
            { equation: "4Gd + 3O₂ → 2Gd₂O₃", reactants: [{ name: "Gd", coeff: 4, molarMass: 157.25 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "Gd₂O₃", coeff: 2, molarMass: 362.497 }] },
            { equation: "2Gd + 3Cl₂ → 2GdCl₃", reactants: [{ name: "Gd", coeff: 2, molarMass: 157.25 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "GdCl₃", coeff: 2, molarMass: 263.609 }] },
            { equation: "2Gd + 3F₂ → 2GdF₃", reactants: [{ name: "Gd", coeff: 2, molarMass: 157.25 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "GdF₃", coeff: 2, molarMass: 214.244 }] }
        ]
    },
    {
        num: 65, symbol: "Tb", name: "Terbium", col: 11, row: 9, type: "lanthanide", formula: "8Tb + 7O₂ → 2Tb₄O₇", usage: "Green TV screen phosphors, sonar sensors, energy-efficient lamps", molarMass: 158.93,
        formulas: [
            { equation: "8Tb + 7O₂ → 2Tb₄O₇", reactants: [{ name: "Tb", coeff: 8, molarMass: 158.93 }, { name: "O₂", coeff: 7, molarMass: 31.998 }], products: [{ name: "Tb₄O₇", coeff: 2, molarMass: 747.702 }] },
            { equation: "2Tb + 3Cl₂ → 2TbCl₃", reactants: [{ name: "Tb", coeff: 2, molarMass: 158.93 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "TbCl₃", coeff: 2, molarMass: 265.289 }] },
            { equation: "2Tb + 3F₂ → 2TbF₃", reactants: [{ name: "Tb", coeff: 2, molarMass: 158.93 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "TbF₃", coeff: 2, molarMass: 215.924 }] }
        ]
    },
    {
        num: 66, symbol: "Dy", name: "Dysprosium", col: 12, row: 9, type: "lanthanide", formula: "4Dy + 3O₂ → 2Dy₂O₃", usage: "EV motor magnets, nuclear control rods, laser materials", molarMass: 162.50,
        formulas: [
            { equation: "4Dy + 3O₂ → 2Dy₂O₃", reactants: [{ name: "Dy", coeff: 4, molarMass: 162.50 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "Dy₂O₃", coeff: 2, molarMass: 372.997 }] },
            { equation: "2Dy + 3Cl₂ → 2DyCl₃", reactants: [{ name: "Dy", coeff: 2, molarMass: 162.50 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "DyCl₃", coeff: 2, molarMass: 268.859 }] },
            { equation: "2Dy + 3F₂ → 2DyF₃", reactants: [{ name: "Dy", coeff: 2, molarMass: 162.50 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "DyF₃", coeff: 2, molarMass: 219.494 }] }
        ]
    },
    {
        num: 67, symbol: "Ho", name: "Holmium", col: 13, row: 9, type: "lanthanide", formula: "4Ho + 3O₂ → 2Ho₂O₃", usage: "Surgical medical lasers, creating high magnetic field strengths", molarMass: 164.93,
        formulas: [
            { equation: "4Ho + 3O₂ → 2Ho₂O₃", reactants: [{ name: "Ho", coeff: 4, molarMass: 164.93 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "Ho₂O₃", coeff: 2, molarMass: 377.857 }] },
            { equation: "2Ho + 3Cl₂ → 2HoCl₃", reactants: [{ name: "Ho", coeff: 2, molarMass: 164.93 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "HoCl₃", coeff: 2, molarMass: 271.289 }] },
            { equation: "2Ho + 3F₂ → 2HoF₃", reactants: [{ name: "Ho", coeff: 2, molarMass: 164.93 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "HoF₃", coeff: 2, molarMass: 221.924 }] }
        ]
    },
    {
        num: 68, symbol: "Er", name: "Erbium", col: 14, row: 9, type: "lanthanide", formula: "4Er + 3O₂ → 2Er₂O₃", usage: "Fiber optic laser signal amplifiers, pink sunglasses tint", molarMass: 167.26,
        formulas: [
            { equation: "4Er + 3O₂ → 2Er₂O₃", reactants: [{ name: "Er", coeff: 4, molarMass: 167.26 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "Er₂O₃", coeff: 2, molarMass: 382.517 }] },
            { equation: "2Er + 3Cl₂ → 2ErCl₃", reactants: [{ name: "Er", coeff: 2, molarMass: 167.26 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "ErCl₃", coeff: 2, molarMass: 273.619 }] },
            { equation: "2Er + 3F₂ → 2ErF₃", reactants: [{ name: "Er", coeff: 2, molarMass: 167.26 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "ErF₃", coeff: 2, molarMass: 224.254 }] }
        ]
    },
    {
        num: 69, symbol: "Tm", name: "Thulium", col: 15, row: 9, type: "lanthanide", formula: "4Tm + 3O₂ → 2Tm₂O₃", usage: "Portable medical X-ray machines, high-efficiency arc lighting", molarMass: 168.93,
        formulas: [
            { equation: "4Tm + 3O₂ → 2Tm₂O₃", reactants: [{ name: "Tm", coeff: 4, molarMass: 168.93 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "Tm₂O₃", coeff: 2, molarMass: 385.857 }] },
            { equation: "2Tm + 3Cl₂ → 2TmCl₃", reactants: [{ name: "Tm", coeff: 2, molarMass: 168.93 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "TmCl₃", coeff: 2, molarMass: 275.289 }] },
            { equation: "2Tm + 3F₂ → 2TmF₃", reactants: [{ name: "Tm", coeff: 2, molarMass: 168.93 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "TmF₃", coeff: 2, molarMass: 225.924 }] }
        ]
    },
    {
        num: 70, symbol: "Yb", name: "Ytterbium", col: 16, row: 9, type: "lanthanide", formula: "4Yb + 3O₂ → 2Yb₂O₃", usage: "Industrial fiber optic lasers, earthquake ground stress sensors", molarMass: 173.05,
        formulas: [
            { equation: "4Yb + 3O₂ → 2Yb₂O₃", reactants: [{ name: "Yb", coeff: 4, molarMass: 173.05 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "Yb₂O₃", coeff: 2, molarMass: 394.097 }] },
            { equation: "2Yb + 3Cl₂ → 2YbCl₃", reactants: [{ name: "Yb", coeff: 2, molarMass: 173.05 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "YbCl₃", coeff: 2, molarMass: 279.409 }] },
            { equation: "2Yb + 3F₂ → 2YbF₃", reactants: [{ name: "Yb", coeff: 2, molarMass: 173.05 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "YbF₃", coeff: 2, molarMass: 230.044 }] }
        ]
    },
    {
        num: 71, symbol: "Lu", name: "Lutetium", col: 17, row: 9, type: "lanthanide", formula: "4Lu + 3O₂ → 2Lu₂O₃", usage: "PET scan detectors in cancer medicine, petroleum refining", molarMass: 174.97,
        formulas: [
            { equation: "4Lu + 3O₂ → 2Lu₂O₃", reactants: [{ name: "Lu", coeff: 4, molarMass: 174.97 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "Lu₂O₃", coeff: 2, molarMass: 397.937 }] },
            { equation: "2Lu + 3Cl₂ → 2LuCl₃", reactants: [{ name: "Lu", coeff: 2, molarMass: 174.97 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "LuCl₃", coeff: 2, molarMass: 281.329 }] },
            { equation: "2Lu + 3F₂ → 2LuF₃", reactants: [{ name: "Lu", coeff: 2, molarMass: 174.97 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "LuF₃", coeff: 2, molarMass: 231.964 }] }
        ]
    },

    // --- ACTINIDES (ROW 10) ---
    {
        num: 89, symbol: "Ac", name: "Actinium", col: 3, row: 10, type: "actinide", formula: "4Ac + 3O₂ → 2Ac₂O₃", usage: "Radioisotope thermoelectric generators, targeted alpha therapy", molarMass: 227,
        formulas: [
            { equation: "4Ac + 3O₂ → 2Ac₂O₃", reactants: [{ name: "Ac", coeff: 4, molarMass: 227 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "Ac₂O₃", coeff: 2, molarMass: 501.994 }] },
            { equation: "2Ac + 3Cl₂ → 2AcCl₃", reactants: [{ name: "Ac", coeff: 2, molarMass: 227 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "AcCl₃", coeff: 2, molarMass: 333.359 }] },
            { equation: "2Ac + 3F₂ → 2AcF₃", reactants: [{ name: "Ac", coeff: 2, molarMass: 227 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "AcF₃", coeff: 2, molarMass: 283.994 }] }
        ]
    },
    {
        num: 90, symbol: "Th", name: "Thorium", col: 4, row: 10, type: "actinide", formula: "Th + O₂ → ThO₂", usage: "Next-gen nuclear reactor fuel, lantern mantles, TIG welding", molarMass: 232.04,
        formulas: [
            { equation: "Th + O₂ → ThO₂", reactants: [{ name: "Th", coeff: 1, molarMass: 232.04 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "ThO₂", coeff: 1, molarMass: 264.038 }] },
            { equation: "Th + 2Cl₂ → ThCl₄", reactants: [{ name: "Th", coeff: 1, molarMass: 232.04 }, { name: "Cl₂", coeff: 2, molarMass: 70.906 }], products: [{ name: "ThCl₄", coeff: 1, molarMass: 373.852 }] },
            { equation: "Th + 2F₂ → ThF₄", reactants: [{ name: "Th", coeff: 1, molarMass: 232.04 }, { name: "F₂", coeff: 2, molarMass: 37.996 }], products: [{ name: "ThF₄", coeff: 1, molarMass: 308.036 }] }
        ]
    },
    {
        num: 91, symbol: "Pa", name: "Protactinium", col: 5, row: 10, type: "actinide", formula: "4Pa + 5O₂ → 2Pa₂O₅", usage: "Geological dating of deep-sea sediments (rare research use)", molarMass: 231.04,
        formulas: [
            { equation: "4Pa + 5O₂ → 2Pa₂O₅", reactants: [{ name: "Pa", coeff: 4, molarMass: 231.04 }, { name: "O₂", coeff: 5, molarMass: 31.998 }], products: [{ name: "Pa₂O₅", coeff: 2, molarMass: 542.075 }] },
            { equation: "2Pa + 5Cl₂ → 2PaCl₅", reactants: [{ name: "Pa", coeff: 2, molarMass: 231.04 }, { name: "Cl₂", coeff: 5, molarMass: 70.906 }], products: [{ name: "PaCl₅", coeff: 2, molarMass: 408.305 }] },
            { equation: "2Pa + 5F₂ → 2PaF₅", reactants: [{ name: "Pa", coeff: 2, molarMass: 231.04 }, { name: "F₂", coeff: 5, molarMass: 37.996 }], products: [{ name: "PaF₅", coeff: 2, molarMass: 326.030 }] }
        ]
    },
    {
        num: 92, symbol: "U", name: "Uranium", col: 6, row: 10, type: "actinide", formula: "U + O₂ → UO₂", usage: "Nuclear power station fuel, naval submarine propulsion", molarMass: 238.03,
        formulas: [
            { equation: "U + 3F₂ → UF₆", reactants: [{ name: "U", coeff: 1, molarMass: 238.03 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "UF₆", coeff: 1, molarMass: 352.018 }] },
            { equation: "U + O₂ → UO₂", reactants: [{ name: "U", coeff: 1, molarMass: 238.03 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "UO₂", coeff: 1, molarMass: 270.028 }] },
            { equation: "U + 2Cl₂ → UCl₄", reactants: [{ name: "U", coeff: 1, molarMass: 238.03 }, { name: "Cl₂", coeff: 2, molarMass: 70.906 }], products: [{ name: "UCl₄", coeff: 1, molarMass: 379.842 }] }
        ]
    },
    {
        num: 93, symbol: "Np", name: "Neptunium", col: 7, row: 10, type: "actinide", formula: "Np + O₂ → NpO₂", usage: "Precursor for Plutonium-238 production, neutron detectors", molarMass: 237,
        formulas: [
            { equation: "Np + O₂ → NpO₂", reactants: [{ name: "Np", coeff: 1, molarMass: 237 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "NpO₂", coeff: 1, molarMass: 268.998 }] },
            { equation: "2Np + 3F₂ → 2NpF₃", reactants: [{ name: "Np", coeff: 2, molarMass: 237 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "NpF₃", coeff: 2, molarMass: 293.994 }] },
            { equation: "Np + 2F₂ → NpF₄", reactants: [{ name: "Np", coeff: 1, molarMass: 237 }, { name: "F₂", coeff: 2, molarMass: 37.996 }], products: [{ name: "NpF₄", coeff: 1, molarMass: 312.992 }] }
        ]
    },
    {
        num: 94, symbol: "Pu", name: "Plutonium", col: 8, row: 10, type: "actinide", formula: "Pu + O₂ → PuO₂", usage: "Nuclear weapons, deep-space probe power sources (Mars rovers)", molarMass: 244,
        formulas: [
            { equation: "Pu + O₂ → PuO₂", reactants: [{ name: "Pu", coeff: 1, molarMass: 244 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "PuO₂", coeff: 1, molarMass: 275.998 }] },
            { equation: "Pu + 2F₂ → PuF₄", reactants: [{ name: "Pu", coeff: 1, molarMass: 244 }, { name: "F₂", coeff: 2, molarMass: 37.996 }], products: [{ name: "PuF₄", coeff: 1, molarMass: 319.992 }] },
            { equation: "Pu + 3F₂ → PuF₆", reactants: [{ name: "Pu", coeff: 1, molarMass: 244 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "PuF₆", coeff: 1, molarMass: 357.988 }] }
        ]
    },
    {
        num: 95, symbol: "Am", name: "Americium", col: 9, row: 10, type: "actinide", formula: "Am + O₂ → AmO₂", usage: "Household ionization smoke detectors, industrial thickness gauges", molarMass: 243,
        formulas: [
            { equation: "Am + O₂ → AmO₂", reactants: [{ name: "Am", coeff: 1, molarMass: 243 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "AmO₂", coeff: 1, molarMass: 274.998 }] },
            { equation: "2Am + 3F₂ → 2AmF₃", reactants: [{ name: "Am", coeff: 2, molarMass: 243 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "AmF₃", coeff: 2, molarMass: 299.994 }] },
            { equation: "2Am + 3Cl₂ → 2AmCl₃", reactants: [{ name: "Am", coeff: 2, molarMass: 243 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "AmCl₃", coeff: 2, molarMass: 349.359 }] }
        ]
    },
    {
        num: 96, symbol: "Cm", name: "Curium", col: 10, row: 10, type: "actinide", formula: "4Cm + 3O₂ → 2Cm₂O₃", usage: "Alpha particle X-ray spectrometers on planetary rovers", molarMass: 247,
        formulas: [
            { equation: "4Cm + 3O₂ → 2Cm₂O₃", reactants: [{ name: "Cm", coeff: 4, molarMass: 247 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "Cm₂O₃", coeff: 2, molarMass: 541.994 }] },
            { equation: "Cm + O₂ → CmO₂", reactants: [{ name: "Cm", coeff: 1, molarMass: 247 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "CmO₂", coeff: 1, molarMass: 278.998 }] },
            { equation: "2Cm + 3F₂ → 2CmF₃", reactants: [{ name: "Cm", coeff: 2, molarMass: 247 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "CmF₃", coeff: 2, molarMass: 303.994 }] }
        ]
    },
    {
        num: 97, symbol: "Bk", name: "Berkelium", col: 11, row: 10, type: "actinide", formula: "Bk + O₂ → BkO₂", usage: "Target element for synthesizing superheavy elements (Tennessine)", molarMass: 247,
        formulas: [
            { equation: "Bk + O₂ → BkO₂", reactants: [{ name: "Bk", coeff: 1, molarMass: 247 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "BkO₂", coeff: 1, molarMass: 278.998 }] },
            { equation: "2Bk + 3F₂ → 2BkF₃", reactants: [{ name: "Bk", coeff: 2, molarMass: 247 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "BkF₃", coeff: 2, molarMass: 303.994 }] },
            { equation: "2Bk + 3Cl₂ → 2BkCl₃", reactants: [{ name: "Bk", coeff: 2, molarMass: 247 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "BkCl₃", coeff: 2, molarMass: 353.359 }] }
        ]
    },
    {
        num: 98, symbol: "Cf", name: "Californium", col: 12, row: 10, type: "actinide", formula: "Cf + O₂ → CfO₂", usage: "Neutron moisture gauges, nuclear reactor startup sources", molarMass: 251,
        formulas: [
            { equation: "Cf + O₂ → CfO₂", reactants: [{ name: "Cf", coeff: 1, molarMass: 251 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "CfO₂", coeff: 1, molarMass: 282.998 }] },
            { equation: "2Cf + 3Cl₂ → 2CfCl₃", reactants: [{ name: "Cf", coeff: 2, molarMass: 251 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "CfCl₃", coeff: 2, molarMass: 357.359 }] },
            { equation: "2Cf + 3F₂ → 2CfF₃", reactants: [{ name: "Cf", coeff: 2, molarMass: 251 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "CfF₃", coeff: 2, molarMass: 307.994 }] }
        ]
    },
    {
        num: 99, symbol: "Es", name: "Einsteinium", col: 13, row: 10, type: "actinide", formula: "4Es + 3O₂ → 2Es₂O₃", usage: "Purely scientific research (synthetic actinide)", molarMass: 252,
        formulas: [
            { equation: "4Es + 3O₂ → 2Es₂O₃", reactants: [{ name: "Es", coeff: 4, molarMass: 252 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "Es₂O₃", coeff: 2, molarMass: 551.994 }] },
            { equation: "2Es + 3Cl₂ → 2EsCl₃", reactants: [{ name: "Es", coeff: 2, molarMass: 252 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "EsCl₃", coeff: 2, molarMass: 358.359 }] },
            { equation: "2Es + 3F₂ → 2EsF₃", reactants: [{ name: "Es", coeff: 2, molarMass: 252 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "EsF₃", coeff: 2, molarMass: 308.994 }] }
        ]
    },
    {
        num: 100, symbol: "Fm", name: "Fermium", col: 14, row: 10, type: "actinide", formula: "2Fm + 3Cl₂ → 2FmCl₃", usage: "Purely scientific research (synthetic actinide)", molarMass: 257,
        formulas: [
            { equation: "2Fm + 3Cl₂ → 2FmCl₃", reactants: [{ name: "Fm", coeff: 2, molarMass: 257 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "FmCl₃", coeff: 2, molarMass: 363.359 }] },
            { equation: "2Fm + 3F₂ → 2FmF₃", reactants: [{ name: "Fm", coeff: 2, molarMass: 257 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "FmF₃", coeff: 2, molarMass: 313.994 }] },
            { equation: "2Fm + O₂ → 2FmO", reactants: [{ name: "Fm", coeff: 2, molarMass: 257 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "FmO", coeff: 2, molarMass: 272.999 }] }
        ]
    },
    {
        num: 101, symbol: "Md", name: "Mendelevium", col: 15, row: 10, type: "actinide", formula: "2Md + 3Cl₂ → 2MdCl₃", usage: "Purely scientific research (synthetic actinide)", molarMass: 258,
        formulas: [
            { equation: "2Md + 3Cl₂ → 2MdCl₃", reactants: [{ name: "Md", coeff: 2, molarMass: 258 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "MdCl₃", coeff: 2, molarMass: 364.359 }] },
            { equation: "Md + Cl₂ → MdCl₂", reactants: [{ name: "Md", coeff: 1, molarMass: 258 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "MdCl₂", coeff: 1, molarMass: 328.906 }] },
            { equation: "2Md + O₂ → 2MdO", reactants: [{ name: "Md", coeff: 2, molarMass: 258 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "MdO", coeff: 2, molarMass: 273.999 }] }
        ]
    },
    {
        num: 102, symbol: "No", name: "Nobelium", col: 16, row: 10, type: "actinide", formula: "No + Cl₂ → NoCl₂", usage: "Purely scientific research (synthetic actinide)", molarMass: 259,
        formulas: [
            { equation: "No + Cl₂ → NoCl₂", reactants: [{ name: "No", coeff: 1, molarMass: 259 }, { name: "Cl₂", coeff: 1, molarMass: 70.906 }], products: [{ name: "NoCl₂", coeff: 1, molarMass: 329.906 }] },
            { equation: "2No + 3Cl₂ → 2NoCl₃", reactants: [{ name: "No", coeff: 2, molarMass: 259 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "NoCl₃", coeff: 2, molarMass: 365.359 }] },
            { equation: "2No + O₂ → 2NoO", reactants: [{ name: "No", coeff: 2, molarMass: 259 }, { name: "O₂", coeff: 1, molarMass: 31.998 }], products: [{ name: "NoO", coeff: 2, molarMass: 274.999 }] }
        ]
    },
    {
        num: 103, symbol: "Lr", name: "Lawrencium", col: 17, row: 10, type: "actinide", formula: "2Lr + 3Cl₂ → 2LrCl₃", usage: "Purely scientific research (synthetic actinide)", molarMass: 266,
        formulas: [
            { equation: "2Lr + 3Cl₂ → 2LrCl₃", reactants: [{ name: "Lr", coeff: 2, molarMass: 266 }, { name: "Cl₂", coeff: 3, molarMass: 70.906 }], products: [{ name: "LrCl₃", coeff: 2, molarMass: 372.359 }] },
            { equation: "4Lr + 3O₂ → 2Lr₂O₃", reactants: [{ name: "Lr", coeff: 4, molarMass: 266 }, { name: "O₂", coeff: 3, molarMass: 31.998 }], products: [{ name: "Lr₂O₃", coeff: 2, molarMass: 579.994 }] },
            { equation: "2Lr + 3F₂ → 2LrF₃", reactants: [{ name: "Lr", coeff: 2, molarMass: 266 }, { name: "F₂", coeff: 3, molarMass: 37.996 }], products: [{ name: "LrF₃", coeff: 2, molarMass: 322.994 }] }
        ]
    }
];
const content = document.querySelector('.pertable .container .content');
if (content) {

    const card = document.querySelector('.card');
    const symbol = document.querySelector('.symbol');
    const name = document.querySelector('.name');
    const type = document.querySelector('.type');
    const number = document.querySelector('.number');
    const r = document.querySelector('.row');
    const c = document.querySelector('.column');
    const f = document.querySelector('.formula');
    const u = document.querySelector('.use');
    const m = document.querySelector('.molar-mass');
    elements.forEach(el => {
        const cell = document.createElement('div');
        cell.classList.add("element", el.type);
        cell.style.gridColumn = el.col;
        cell.style.gridRow = el.row;
        cell.innerHTML = `
    <span class="number">${el.num}</span>
    <span class="symbol">${el.symbol}</span>
    <span class="name">${el.name}</span>
    `
        cell.addEventListener("click", () => {
            if (card) {
                card.style.display = "flex";
                cell.classList.add("selected");
                const prev = document.querySelector(".element.selected");
                if (prev) {
                    prev.classList.remove("selected");
                }
            }
            cell.classList.add("selected");
            symbol.textContent = el.symbol;
            name.textContent = `Name: ${el.name}`;
            type.textContent = `Type: ${el.type}`;
            number.textContent = `Atomic Number: ${el.num}`;
            r.textContent = `Row: ${el.row}`;
            c.textContent = `Column: ${el.col}`;
            f.textContent = `Popular Formula: ${el.formula}`;
            u.innerHTML = el.usage.split(',').map(item => `<li>${item}</li>`).join('');
            m.textContent = `Molar Mass: ${el.molarMass} g/mol`;
            card.classList.add("active");
            card.scrollIntoView({
                behavior: "smooth",
                block: "center"
            })
        })
        content.appendChild(cell);
    });
    window.addEventListener("click", (e) => {
        if (!e.target.closest(".element") && !e.target.closest(".card")) {
            card.style.display = "none";
            const prev = document.querySelector(".element.selected");
            if (prev) {
                prev.classList.remove("selected");
            }
        }
    });
}

// FORMULAS

const cardtype = document.querySelectorAll('.formulas .container .cards .card');
const table = document.querySelector('.elements-table');
const tbody = document.querySelector('#table tbody');
const calc = document.querySelector('.calc');
const data = document.querySelector('.calc .container .content .choosen-formula');
cardtype.forEach(c => c.addEventListener("click", () => {
    const headtype = c.querySelector('h4').textContent.toLowerCase().replace(/[\s-]/g, ''); // remove spaces and hyphens
    const mathced = elements.filter(el => headtype.includes(el.type.replace('-', '').toLowerCase()));
    const prevcard = document.querySelector('.card.hovered');
    if (prevcard) {
        prevcard.classList.remove('hovered');
    }
    c.classList.add('hovered');
    tbody.innerHTML = mathced.map(el => `
        <tr>
            <td>${el.name} (${el.symbol})</td>
            <td class="formula-items">
                ${el.formulas.map(f => {
        const coeffs = [...f.reactants, ...f.products].map(item => item.coeff).join(',');
        const masses = [...f.reactants, ...f.products].map(item => item.molarMass).join(',');
        return `<span class="item" data-coeff="${coeffs}" data-masses="${masses}">${f.equation}</span>`;
    }).join('')}
                </td>
                </tr>`).join('');
    table.style.display = "flex";
    table.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
}));

let rawFormula = [];
const i1 = document.getElementById('input1');
const i2 = document.getElementById('input2');
const i3 = document.getElementById('input3');
const mass1 = document.querySelector('.mass1');
const mass2 = document.querySelector('.mass2');
const mass3 = document.querySelector('.mass3');
const error = document.querySelector('.error');

tbody.addEventListener("click", (e) => {
    const formula = e.target.closest('.item');
    if (!formula) return;
    calc.style.display = "flex";
    data.textContent = formula.textContent;
    let arr = formula.dataset.coeff.split(',').map(Number);
    let mass = formula.dataset.masses.split(',').map(Number);
    i1.value = arr[0] || 1;
    i2.value = arr[1] || 1;
    i3.value = arr[2] || 1;
    mass1.textContent = mass[0] + " g/mol";
    mass2.textContent = mass[1] + " g/mol";
    mass3.textContent = mass[2] + " g/mol";
    temp1 = i1.value; // temporary values globally
    temp2 = i2.value;
    temp3 = i3.value;
    m1 = mass[0];
    m2 = mass[1];
    m3 = mass[2];

    rawFormula = formula.textContent.split(/\+|\->|→/).map(str => str.trim().replace(/^\d+/, '')); // remove numbers before elements and any chars 

    calc.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
})

function update_formula() {
    if (rawFormula.length == 0) return;
    const v1 = i1.value, v2 = i2.value, v3 = i3.value;
    data.textContent = `${v1}${rawFormula[0]} + ${v2}${rawFormula[1]} → ${v3}${rawFormula[2]}`;
}

i1.addEventListener("mouseenter", () => {
    i2.disabled = true;
    i3.disabled = true;
})
i1.addEventListener("mouseleave", () => {
    i2.disabled = false;
    i3.disabled = false;
})
i2.addEventListener("mouseenter", () => {
    i1.disabled = true;
    i3.disabled = true;
})
i2.addEventListener("mouseleave", () => {
    i1.disabled = false;
    i3.disabled = false;
})
i3.addEventListener("mouseenter", () => {
    i1.disabled = true;
    i2.disabled = true;
})
i3.addEventListener("mouseleave", () => {
    i1.disabled = false;
    i2.disabled = false;
})

function check_input(i) {
    const val = i.trim();
    if (val === '' || val === '0') {
        return false;
    }
    return !isNaN(Number(val))
}

i1.addEventListener("keydown", (e) => { // when input 1 is changed and click eneter key
    if (e.key === 'Enter' && check_input(i1.value)) {
        i2.value = Number(i1.value * (temp2 / temp1)).toFixed(1);
        mass2.textContent = (i2.value * m2).toFixed(2) + " g/mol";
        i3.value = Number(i1.value * (temp3 / temp1)).toFixed(1);
        mass3.textContent = (i3.value * m3).toFixed(2) + " g/mol";
        update_formula();
    }
    else if (e.key === 'Enter' && !check_input(i1.value)) {
        error.style.display = "block";
        setTimeout(() => {
            error.style.display = "none";
        }, 1000);
    }
})

i2.addEventListener("keydown", (e) => {
    if (e.key === 'Enter' && check_input(i2.value)) {
        i1.value = Number(i2.value * (temp1 / temp2)).toFixed(1);
        mass1.textContent = (i1.value * m1).toFixed(2) + " g/mol";
        i3.value = Number(i2.value * (temp3 / temp2)).toFixed(1);
        mass3.textContent = (i3.value * m3).toFixed(2) + " g/mol";
        update_formula();
    }
    else if (e.key === 'Enter' && !check_input(i2.value)) {
        error.style.display = "block";
        setTimeout(() => {
            error.style.display = "none";
        }, 1000);
    }
})

i3.addEventListener("keydown", (e) => {
    if (e.key === 'Enter' && check_input(i3.value)) {
        i1.value = Number(i3.value * (temp1 / temp3)).toFixed(1);
        mass1.textContent = (i1.value * m1).toFixed(2) + " g/mol";
        i2.value = Number(i3.value * (temp2 / temp3)).toFixed(1);
        mass2.textContent = (i2.value * m2).toFixed(2) + " g/mol";
        update_formula();
    }
    else if (e.key === 'Enter' && !check_input(i3.value)) {
        error.style.display = "block";
        setTimeout(() => {
            error.style.display = "none";
        }, 1000);
    }
})

window.addEventListener("click", (e) => {
    if (!e.target.closest(".card") && !e.target.closest(".elements-table") && !e.target.closest(".calc")) {
        cardtype.forEach(c => c.classList.remove('hovered'));
        table.style.display = "none";
        calc.style.display = "none";
    }
});