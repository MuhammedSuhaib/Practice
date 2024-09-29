        //     "how to use BETTER COMMENT EXTENSION"
        //    "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"


// * This is a highlighted comment
// ! This is an alert comment
// ? This is a question or query
// TODO: This is a to-do comment
// @param paramName This is a parameter comment

// "--------------------------------------------------------------------------"
// "--------------------------------------------------------------------------"
                         
                            
               `                 /
               delimiter mark use in regex to start and end a regex`      
                       
                        
/**
 

/: Delimiter marking the start of the regular expression.
\bcat\b: The pattern to match:
\b: Word boundary.
cat: The literal string "cat".
\b: Word boundary.
/: Delimiter marking the end of the regular expression.
g: Global flag indicating that the pattern should be applied to the entire string, not just the first match.
These delimiters and flags define how the regular expression engine interprets the pattern within the delimiters.


 */




                                 "/b"

/**
Let's say you have a string text and you want to
// *  find all occurrences of the word "cat" that appear as a whole word, 
//! not as part of another "WORD",like category and catalog
You can use the \b word boundary anchor to achieve this. Here's how you can do it:
*/




const text = "The cat is on the mat. the cat is bad . cat can hurt .A category contains a catalog.";

let using_b_to_find_word_cat = text.match(/\bcat\b/g);

console.log(using_b_to_find_word_cat); 


// * to find all cats

let using_b_to_All_find_word_cat = text.match(/cat/g);

console.log(using_b_to_All_find_word_cat); 
