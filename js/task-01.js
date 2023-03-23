const ul = document.getElementById("categories");
const cantUl = ul.children.length
const lis = ul.children;
console.log(`Number of categories: ${cantUl}`);

for (let i = 0; i < lis.length; i++){
    const li = lis[i];
    const category = li.querySelector("h2").textContent;
    const elements = li.querySelectorAll("li").length;

    console.log(`Category:  ${category} `);
    console.log(`elements:  ${elements} `);
}