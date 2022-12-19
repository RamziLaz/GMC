var phrase = "lazouni mohamed ramzi software engineer in sastanaqqam and future full stack developper."
var count1 = 1
var count2 = 0
var count3=phrase.length
for (let i in phrase) {
    if (phrase[i] == " ")
        count1++
    if (phrase[i] == "a" || phrase[i] == "e" || phrase[i] == "i" || phrase[i] == "o" || phrase[i] == "u")
        count2++
    
}
console.log("lenght of sentence is " +count3)
console.log("number of word is " +count1)
console.log("number of voyel is " +count2)

