/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
/*  "Docs": [{type: 'autogenerated', dirName: '.'}], */
    Docs: {
       "Features": ["writeback","export","import","shortcut","formula-sum","col-references"],
    },
  // But you can create a sidebar manually
  functionSideBar: {
        "Formula Syntax": ["formula-list"],
        "Logical Functions": [
            "references/formulas/if",
            "references/formulas/switch",
            "references/formulas/and",
            "references/formulas/or",
            "references/formulas/not",
            "references/formulas/xor",
            "references/formulas/isnumber",
            "references/formulas/ifna",
            "references/formulas/in",
        ],
        "Text Formatting Functions": [
            "references/formulas/text",
            "references/formulas/concatenate",
        ],
        "Math Functions": [
            "references/formulas/sum",
            "references/formulas/average",
            "references/formulas/averageexzero",
            "references/formulas/averageexneg",
            "references/formulas/averageexzeroneg",
            "references/formulas/countif",
            "references/formulas/abs",
            "references/formulas/min",
            "references/formulas/max",
            "references/formulas/power",
            "references/formulas/sqrt",
            "references/formulas/exp",
            "references/formulas/log",
            "references/formulas/round",
            "references/formulas/ceiling",
            "references/formulas/floor",
        ],   
},
    "Writeback": [
        {
            type: "category",
            label: "Writeback",
            items: ["writeback/overview", "writeback/database", "writeback/csv"],
        },    
    "writeback/writeback-logs",
    ],
};
