function menu() {
    const menu = document.querySelector('.menu');
    menu.addEventListener('click', () => {
        menu.classList.toggle('active');
    })
}

menu();

const elements = [
    // row 1
    { num: 1, symbol: "H", name: "Hydrogen", col: 1, row: 1, type: "nonmetal", formula: "2H₂ + O₂ → 2H₂O" },
    { num: 2, symbol: "He", name: "Helium", col: 18, row: 1, type: "noble-gas", formula: "He (Inert / Monatomic)" },

    // row 2
    { num: 3, symbol: "Li", name: "Lithium", col: 1, row: 2, type: "alkali", formula: "4Li + O₂ → 2Li₂O" },
    { num: 4, symbol: "Be", name: "Beryllium", col: 2, row: 2, type: "alkaline-earth", formula: "2Be + O₂ → 2BeO" },
    { num: 5, symbol: "B", name: "Boron", col: 13, row: 2, type: "metalloid", formula: "4B + 3O₂ → 2B₂O₃" },
    { num: 6, symbol: "C", name: "Carbon", col: 14, row: 2, type: "nonmetal", formula: "C + O₂ → CO₂" },
    { num: 7, symbol: "N", name: "Nitrogen", col: 15, row: 2, type: "nonmetal", formula: "N₂ + 3H₂ → 2NH₃" },
    { num: 8, symbol: "O", name: "Oxygen", col: 16, row: 2, type: "nonmetal", formula: "C + O₂ → CO₂" },
    { num: 9, symbol: "F", name: "Fluorine", col: 17, row: 2, type: "halogen", formula: "H₂ + F₂ → 2HF" },
    { num: 10, symbol: "Ne", name: "Neon", col: 18, row: 2, type: "noble-gas", formula: "Ne (Inert / Monatomic)" },

    // row 3
    { num: 11, symbol: "Na", name: "Sodium", col: 1, row: 3, type: "alkali", formula: "2Na + Cl₂ → 2NaCl" },
    { num: 12, symbol: "Mg", name: "Magnesium", col: 2, row: 3, type: "alkaline-earth", formula: "2Mg + O₂ → 2MgO" },
    { num: 13, symbol: "Al", name: "Aluminum", col: 13, row: 3, type: "post-transition", formula: "4Al + 3O₂ → 2Al₂O₃" },
    { num: 14, symbol: "Si", name: "Silicon", col: 14, row: 3, type: "metalloid", formula: "Si + O₂ → SiO₂" },
    { num: 15, symbol: "P", name: "Phosphorus", col: 15, row: 3, type: "nonmetal", formula: "P₄ + 5O₂ → P₄O₁₀" },
    { num: 16, symbol: "S", name: "Sulfur", col: 16, row: 3, type: "nonmetal", formula: "S + O₂ → SO₂" },
    { num: 17, symbol: "Cl", name: "Chlorine", col: 17, row: 3, type: "halogen", formula: "H₂ + Cl₂ → 2HCl" },
    { num: 18, symbol: "Ar", name: "Argon", col: 18, row: 3, type: "noble-gas", formula: "Ar (Inert / Monatomic)" },

    // row 4
    { num: 19, symbol: "K", name: "Potassium", col: 1, row: 4, type: "alkali", formula: "2K + 2H₂O → 2KOH + H₂" },
    { num: 20, symbol: "Ca", name: "Calcium", col: 2, row: 4, type: "alkaline-earth", formula: "Ca + CO₂ + H₂O → CaCO₃ + H₂" },
    { num: 21, symbol: "Sc", name: "Scandium", col: 3, row: 4, type: "transition", formula: "4Sc + 3O₂ → 2Sc₂O₃" },
    { num: 22, symbol: "Ti", name: "Titanium", col: 4, row: 4, type: "transition", formula: "Ti + O₂ → TiO₂" },
    { num: 23, symbol: "V", name: "Vanadium", col: 5, row: 4, type: "transition", formula: "4V + 5O₂ → 2V₂O₅" },
    { num: 24, symbol: "Cr", name: "Chromium", col: 6, row: 4, type: "transition", formula: "4Cr + 3O₂ → 2Cr₂O₃" },
    { num: 25, symbol: "Mn", name: "Manganese", col: 7, row: 4, type: "transition", formula: "Mn + O₂ → MnO₂" },
    { num: 26, symbol: "Fe", name: "Iron", col: 8, row: 4, type: "transition", formula: "4Fe + 3O₂ → 2Fe₂O₃" },
    { num: 27, symbol: "Co", name: "Cobalt", col: 9, row: 4, type: "transition", formula: "Co + Cl₂ → CoCl₂" },
    { num: 28, symbol: "Ni", name: "Nickel", col: 10, row: 4, type: "transition", formula: "Ni + H₂SO₄ → NiSO₄ + H₂" },
    { num: 29, symbol: "Cu", name: "Copper", col: 11, row: 4, type: "transition", formula: "Cu + 2H₂SO₄ → CuSO₄ + SO₂ + 2H₂O" },
    { num: 30, symbol: "Zn", name: "Zinc", col: 12, row: 4, type: "transition", formula: "2Zn + O₂ → 2ZnO" },
    { num: 31, symbol: "Ga", name: "Gallium", col: 13, row: 4, type: "post-transition", formula: "Ga + As → GaAs" },
    { num: 32, symbol: "Ge", name: "Germanium", col: 14, row: 4, type: "metalloid", formula: "Ge + O₂ → GeO₂" },
    { num: 33, symbol: "As", name: "Arsenic", col: 15, row: 4, type: "metalloid", formula: "4As + 3O₂ → 2As₂O₃" },
    { num: 34, symbol: "Se", name: "Selenium", col: 16, row: 4, type: "nonmetal", formula: "Se + O₂ → SeO₂" },
    { num: 35, symbol: "Br", name: "Bromine", col: 17, row: 4, type: "halogen", formula: "2Na + Br₂ → 2NaBr" },
    { num: 36, symbol: "Kr", name: "Krypton", col: 18, row: 4, type: "noble-gas", formula: "Kr + F₂ → KrF₂" },

    // row 5
    { num: 37, symbol: "Rb", name: "Rubidium", col: 1, row: 5, type: "alkali", formula: "2Rb + Cl₂ → 2RbCl" },
    { num: 38, symbol: "Sr", name: "Strontium", col: 2, row: 5, type: "alkaline-earth", formula: "2Sr + O₂ → 2SrO" },
    { num: 39, symbol: "Y", name: "Yttrium", col: 3, row: 5, type: "transition", formula: "4Y + 3O₂ → 2Y₂O₃" },
    { num: 40, symbol: "Zr", name: "Zirconium", col: 4, row: 5, type: "transition", formula: "Zr + O₂ → ZrO₂" },
    { num: 41, symbol: "Nb", name: "Niobium", col: 5, row: 5, type: "transition", formula: "4Nb + 5O₂ → 2Nb₂O₅" },
    { num: 42, symbol: "Mo", name: "Molybdenum", col: 6, row: 5, type: "transition", formula: "Mo + 2S → MoS₂" },
    { num: 43, symbol: "Tc", name: "Technetium", col: 7, row: 5, type: "transition", formula: "4Tc + 7O₂ → 2Tc₂O₇" },
    { num: 44, symbol: "Ru", name: "Ruthenium", col: 8, row: 5, type: "transition", formula: "Ru + O₂ → RuO₂" },
    { num: 45, symbol: "Rh", name: "Rhodium", col: 9, row: 5, type: "transition", formula: "2Rh + 3Cl₂ → 2RhCl₃" },
    { num: 46, symbol: "Pd", name: "Palladium", col: 10, row: 5, type: "transition", formula: "Pd + Cl₂ → PdCl₂" },
    { num: 47, symbol: "Ag", name: "Silver", col: 11, row: 5, type: "transition", formula: "2Ag + HNO₃ → AgNO₃ + H₂" },
    { num: 48, symbol: "Cd", name: "Cadmium", col: 12, row: 5, type: "transition", formula: "Cd + S → CdS" },
    { num: 49, symbol: "In", name: "Indium", col: 13, row: 5, type: "post-transition", formula: "4In + 3O₂ → 2In₂O₃" },
    { num: 50, symbol: "Sn", name: "Tin", col: 14, row: 5, type: "post-transition", formula: "Sn + O₂ → SnO₂" },
    { num: 51, symbol: "Sb", name: "Antimony", col: 15, row: 5, type: "metalloid", formula: "4Sb + 3O₂ → 2Sb₂O₃" },
    { num: 52, symbol: "Te", name: "Tellurium", col: 16, row: 5, type: "metalloid", formula: "Cd + Te → CdTe" },
    { num: 53, symbol: "I", name: "Iodine", col: 17, row: 5, type: "halogen", formula: "2K + I₂ → 2KI" },
    { num: 54, symbol: "Xe", name: "Xenon", col: 18, row: 5, type: "noble-gas", formula: "Xe + F₂ → XeF₂" },

    // row 6
    { num: 55, symbol: "Cs", name: "Cesium", col: 1, row: 6, type: "alkali", formula: "2Cs + Cl₂ → 2CsCl" },
    { num: 56, symbol: "Ba", name: "Barium", col: 2, row: 6, type: "alkaline-earth", formula: "Ba + H₂SO₄ → BaSO₄ + H₂" },
    { num: 72, symbol: "Hf", name: "Hafnium", col: 4, row: 6, type: "transition", formula: "Hf + O₂ → HfO₂" },
    { num: 73, symbol: "Ta", name: "Tantalum", col: 5, row: 6, type: "transition", formula: "4Ta + 5O₂ → 2Ta₂O₅" },
    { num: 74, symbol: "W", name: "Tungsten", col: 6, row: 6, type: "transition", formula: "W + C → WC" },
    { num: 75, symbol: "Re", name: "Rhenium", col: 7, row: 6, type: "transition", formula: "4Re + 7O₂ → 2Re₂O₇" },
    { num: 76, symbol: "Os", name: "Osmium", col: 8, row: 6, type: "transition", formula: "Os + 2O₂ → OsO₄" },
    { num: 77, symbol: "Ir", name: "Iridium", col: 9, row: 6, type: "transition", formula: "Ir + O₂ → IrO₂" },
    { num: 78, symbol: "Pt", name: "Platinum", col: 10, row: 6, type: "transition", formula: "Pt + Cl₂ → PtCl₂" },
    { num: 79, symbol: "Au", name: "Gold", col: 11, row: 6, type: "transition", formula: "Au + 3HNO₃ + 4HCl → HAuCl₄ + 3NO₂ + 3H₂O" },
    { num: 80, symbol: "Hg", name: "Mercury", col: 12, row: 6, type: "transition", formula: "Hg + S → HgS" },
    { num: 81, symbol: "Tl", name: "Thallium", col: 13, row: 6, type: "post-transition", formula: "2Tl + H₂SO₄ → Tl₂SO₄ + H₂" },
    { num: 82, symbol: "Pb", name: "Lead", col: 14, row: 6, type: "post-transition", formula: "Pb + O₂ → PbO₂" },
    { num: 83, symbol: "Bi", name: "Bismuth", col: 15, row: 6, type: "post-transition", formula: "4Bi + 3O₂ → 2Bi₂O₃" },
    { num: 84, symbol: "Po", name: "Polonium", col: 16, row: 6, type: "post-transition", formula: "Po + O₂ → PoO₂" },
    { num: 85, symbol: "At", name: "Astatine", col: 17, row: 6, type: "halogen", formula: "H₂ + At₂ → 2HAt" },
    { num: 86, symbol: "Rn", name: "Radon", col: 18, row: 6, type: "noble-gas", formula: "Rn + F₂ → RnF₂" },

    // row 7
    { num: 87, symbol: "Fr", name: "Francium", col: 1, row: 7, type: "alkali", formula: "2Fr + Cl₂ → 2FrCl" },
    { num: 88, symbol: "Ra", name: "Radium", col: 2, row: 7, type: "alkaline-earth", formula: "Ra + Cl₂ → RaCl₂" },
    { num: 104, symbol: "Rf", name: "Rutherfordium", col: 4, row: 7, type: "transition", formula: "Rf + 2Cl₂ → RfCl₄" },
    { num: 105, symbol: "Db", name: "Dubnium", col: 5, row: 7, type: "transition", formula: "2Db + 5Cl₂ → 2DbCl₅" },
    { num: 106, symbol: "Sg", name: "Seaborgium", col: 6, row: 7, type: "transition", formula: "Sg + O₂ + Cl₂ → SgO₂Cl₂" },
    { num: 107, symbol: "Bh", name: "Bohrium", col: 7, row: 7, type: "transition", formula: "2Bh + 3O₂ + 2HCl → 2BhO₃Cl + H₂" },
    { num: 108, symbol: "Hs", name: "Hassium", col: 8, row: 7, type: "transition", formula: "Hs + 2O₂ → HsO₄" },
    { num: 109, symbol: "Mt", name: "Meitnerium", col: 9, row: 7, type: "transition", formula: "Synthetic Element (Unreactive Data)" },
    { num: 110, symbol: "Ds", name: "Darmstadtium", col: 10, row: 7, type: "transition", formula: "Synthetic Element (Unreactive Data)" },
    { num: 111, symbol: "Rg", name: "Roentgenium", col: 11, row: 7, type: "transition", formula: "Synthetic Element (Unreactive Data)" },
    { num: 112, symbol: "Cn", name: "Copernicium", col: 12, row: 7, type: "transition", formula: "Synthetic Element (Unreactive Data)" },
    { num: 113, symbol: "Nh", name: "Nihonium", col: 13, row: 7, type: "post-transition", formula: "Synthetic Element (Unreactive Data)" },
    { num: 114, symbol: "Fl", name: "Flerovium", col: 14, row: 7, type: "post-transition", formula: "Synthetic Element (Unreactive Data)" },
    { num: 115, symbol: "Mc", name: "Moscovium", col: 15, row: 7, type: "post-transition", formula: "Synthetic Element (Unreactive Data)" },
    { num: 116, symbol: "Lv", name: "Livermorium", col: 16, row: 7, type: "post-transition", formula: "Synthetic Element (Unreactive Data)" },
    { num: 117, symbol: "Ts", name: "Tennessine", col: 17, row: 7, type: "halogen", formula: "Synthetic Element (Unreactive Data)" },
    { num: 118, symbol: "Og", name: "Oganesson", col: 18, row: 7, type: "noble-gas", formula: "Synthetic Element (Unreactive Data)" },

    // Lanthanides (Row 9)
    { num: 57, symbol: "La", name: "Lanthanum", col: 3, row: 9, type: "lanthanide", formula: "4La + 3O₂ → 2La₂O₃" },
    { num: 58, symbol: "Ce", name: "Cerium", col: 4, row: 9, type: "lanthanide", formula: "Ce + O₂ → CeO₂" },
    { num: 59, symbol: "Pr", name: "Praseodymium", col: 5, row: 9, type: "lanthanide", formula: "12Pr + 11O₂ → 2Pr₆O₁₁" },
    { num: 60, symbol: "Nd", name: "Neodymium", col: 6, row: 9, type: "lanthanide", formula: "2Nd + 14Fe + B → Nd₂Fe₁₄B" },
    { num: 61, symbol: "Pm", name: "Promethium", col: 7, row: 9, type: "lanthanide", formula: "2Pm + 3Cl₂ → 2PmCl₃" },
    { num: 62, symbol: "Sm", name: "Samarium", col: 8, row: 9, type: "lanthanide", formula: "Sm + 5Co → SmCo₅" },
    { num: 63, symbol: "Eu", name: "Europium", col: 9, row: 9, type: "lanthanide", formula: "4Eu + 3O₂ → 2Eu₂O₃" },
    { num: 64, symbol: "Gd", name: "Gadolinium", col: 10, row: 9, type: "lanthanide", formula: "4Gd + 3O₂ → 2Gd₂O₃" },
    { num: 65, symbol: "Tb", name: "Terbium", col: 11, row: 9, type: "lanthanide", formula: "8Tb + 7O₂ → 2Tb₄O₇" },
    { num: 66, symbol: "Dy", name: "Dysprosium", col: 12, row: 9, type: "lanthanide", formula: "4Dy + 3O₂ → 2Dy₂O₃" },
    { num: 67, symbol: "Ho", name: "Holmium", col: 13, row: 9, type: "lanthanide", formula: "4Ho + 3O₂ → 2Ho₂O₃" },
    { num: 68, symbol: "Er", name: "Erbium", col: 14, row: 9, type: "lanthanide", formula: "4Er + 3O₂ → 2Er₂O₃" },
    { num: 69, symbol: "Tm", name: "Thulium", col: 15, row: 9, type: "lanthanide", formula: "4Tm + 3O₂ → 2Tm₂O₃" },
    { num: 70, symbol: "Yb", name: "Ytterbium", col: 16, row: 9, type: "lanthanide", formula: "4Yb + 3O₂ → 2Yb₂O₃" },
    { num: 71, symbol: "Lu", name: "Lutetium", col: 17, row: 9, type: "lanthanide", formula: "4Lu + 3O₂ → 2Lu₂O₃" },

    // Actinides (Row 10)
    { num: 89, symbol: "Ac", name: "Actinium", col: 3, row: 10, type: "actinide", formula: "4Ac + 3O₂ → 2Ac₂O₃" },
    { num: 90, symbol: "Th", name: "Thorium", col: 4, row: 10, type: "actinide", formula: "Th + O₂ → ThO₂" },
    { num: 91, symbol: "Pa", name: "Protactinium", col: 5, row: 10, type: "actinide", formula: "4Pa + 5O₂ → 2Pa₂O₅" },
    { num: 92, symbol: "U", name: "Uranium", col: 6, row: 10, type: "actinide", formula: "U + O₂ → UO₂" },
    { num: 93, symbol: "Np", name: "Neptunium", col: 7, row: 10, type: "actinide", formula: "Np + O₂ → NpO₂" },
    { num: 94, symbol: "Pu", name: "Plutonium", col: 8, row: 10, type: "actinide", formula: "Pu + O₂ → PuO₂" },
    { num: 95, symbol: "Am", name: "Americium", col: 9, row: 10, type: "actinide", formula: "Am + O₂ → AmO₂" },
    { num: 96, symbol: "Cm", name: "Curium", col: 10, row: 10, type: "actinide", formula: "4Cm + 3O₂ → 2Cm₂O₃" },
    { num: 97, symbol: "Bk", name: "Berkelium", col: 11, row: 10, type: "actinide", formula: "Bk + O₂ → BkO₂" },
    { num: 98, symbol: "Cf", name: "Californium", col: 12, row: 10, type: "actinide", formula: "Cf + O₂ → CfO₂" },
    { num: 99, symbol: "Es", name: "Einsteinium", col: 13, row: 10, type: "actinide", formula: "4Es + 3O₂ → 2Es₂O₃" },
    { num: 100, symbol: "Fm", name: "Fermium", col: 14, row: 10, type: "actinide", formula: "Synthetic Element (Unreactive Data)" },
    { num: 101, symbol: "Md", name: "Mendelevium", col: 15, row: 10, type: "actinide", formula: "Synthetic Element (Unreactive Data)" },
    { num: 102, symbol: "No", name: "Nobelium", col: 16, row: 10, type: "actinide", formula: "Synthetic Element (Unreactive Data)" },
    { num: 103, symbol: "Lr", name: "Lawrencium", col: 17, row: 10, type: "actinide", formula: "Synthetic Element (Unreactive Data)" }
];

const content = document.querySelector('.pertable .container .content');
const card = document.querySelector('.card');
const symbol = document.querySelector('.symbol');
const name = document.querySelector('.name');
const type = document.querySelector('.type');
const number = document.querySelector('.number');
const r = document.querySelector('.row');
const c = document.querySelector('.column');
const f = document.querySelector('.formula');
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
        const prev = document.querySelector(".element.selected");
        if (prev) {
            prev.classList.remove("selected");
        }
        cell.classList.add("selected");
        symbol.textContent = el.symbol;
        name.textContent = `Name: ${el.name}`;
        type.textContent = `Type: ${el.type}`;
        number.textContent = `Atomic Number: ${el.num}`;
        r.textContent = `Row: ${el.row}`;
        c.textContent = `Column: ${el.col}`;
        f.textContent = `Popular Formula: ${el.formula}`;
        card.classList.add("active");
    })
    content.appendChild(cell);
});