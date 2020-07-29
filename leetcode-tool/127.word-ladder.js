/*
 * @lc app=leetcode id=127 lang=javascript
 *
 * [127] Word Ladder
 */
// 超时了！！！！！！
// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

const canTransform = (a, b) => {
    let cnt = 0;
    for (let index = 0; index < a.length; index++) {
        if (cnt > 1) {
            break;
        }
        const ac = a[index];
        const bc = b[index];
        if (ac !== bc) {
            cnt++;
        }
    }
    return cnt <= 1;
}
var ladderLength1 = function (beginWord, endWord, wordList) {
    if (wordList.indexOf(endWord) < 0) {
        return 0;
    }
    /**
     * @type {Map<string, Set<string>>}
     */
    const graph = new Map();
    for (let i = 0; i < wordList.length; i++) {
        const word = wordList[i];
        graph.set(word, new Set());
        for (let j = 0; j < wordList.length; j++) {
            if (i !== j) {
                const other = wordList[j];
                if (canTransform(word, other)) {
                    graph.get(word).add(other);
                }
            }
        }
    }
    graph.set(beginWord, new Set());
    for (const word of wordList) {
        if (canTransform(beginWord, word)) {
            graph.get(beginWord).add(word);
        }
    }
    const result = new Map();
    let found = false;
    let nodes = Array.from(graph.get(beginWord).values());
    let depth = 2;
    while (found === false) {
        let nextLevel = [];
        if (nodes.length === 0) {
            break;
        }
        for (const word of nodes) {
            if (word === endWord) {
                found = true;
                return depth;
            }
            const currentDist = result.get(word);
            if (currentDist === undefined) {
                result.set(word, depth);
                for (const nextWord of graph.get(word).keys()) {
                    if (result.has(nextWord) === false) {
                        nextLevel.push(nextWord);
                    }
                }
            }
        }
        nodes = nextLevel;
        depth++;
    }
    return found ? depth : 0;
};


/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if (!endWord || wordList.indexOf(endWord) === -1) {
        return 0;
    }
    const indexBegin = wordList.indexOf(beginWord);
    if ( indexBegin !== -1) {
        wordList.splice(indexBegin, 1);
    }
    const compareDiffCount = (compareWord, compareList, diffCount) => {
        compareWord = compareWord.split('');
        let diffList = [];
        for (let i = 0; i < compareList.length; i++) {
            const elem = compareList[i];
            if (compareWord.length !== elem.length) {
                continue;
            }
            let diffWordCount = 0;
            for (let j = 0; j < compareWord.length; j++) {
                if (diffWordCount > diffCount) {
                    break;
                }
                if (compareWord[j] !== elem[j]) {
                    diffWordCount++;
                }
                
            }
            if (diffCount === diffWordCount) {
                diffList.push(elem);
            }
        }
        return {
            word: compareWord.join(''),
            diffList
        }
    }
    let graph = new Map();
    wordList.forEach((item) => {
        const list = compareDiffCount(item, wordList, 1);
        graph.set(list.word, list.diffList);
    });
    const beiginObj = compareDiffCount(beginWord, wordList, 1);
    let closeList = [[beiginObj.word, beiginObj.diffList]];
    let compareList;
    let compareCount = 2;
    while (closeList.length) {
        
        let nextList = [];
        for (let n = 0; n < closeList.length; n++) {
            compareList = closeList[n][1];    
            for (let k = 0; k < compareList.length; k++) {
                let compareWord = compareList[k];
                if (compareWord === endWord) {
                    return compareCount;
                }
                if (graph.has(compareWord)) {
                    nextList.push([compareWord, graph.get(compareWord)]);
                    graph.delete(compareWord);
                }
            }
        }

        closeList = nextList;
        compareCount++;
        console.log(compareCount, 'count');
    }
    return 0;
};
// beginWord = "ymain"
// endWord = "oecij"
// wordList = ["ymann","yycrj","oecij","ymcnj","yzcrj","yycij","xecij","yecij","ymanj","yzcnj","ymain"]
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log","cog"]
beginWord= "cet"
endWord ="ism"
wordList = ["kid","tag","pup","ail","tun","woo","erg","luz","brr","gay","sip","kay","per","val","mes","ohs","now","boa","cet","pal","bar","die","war","hay","eco","pub","lob","rue","fry","lit","rex","jan","cot","bid","ali","pay","col","gum","ger","row","won","dan","rum","fad","tut","sag","yip","sui","ark","has","zip","fez","own","ump","dis","ads","max","jaw","out","btu","ana","gap","cry","led","abe","box","ore","pig","fie","toy","fat","cal","lie","noh","sew","ono","tam","flu","mgm","ply","awe","pry","tit","tie","yet","too","tax","jim","san","pan","map","ski","ova","wed","non","wac","nut","why","bye","lye","oct","old","fin","feb","chi","sap","owl","log","tod","dot","bow","fob","for","joe","ivy","fan","age","fax","hip","jib","mel","hus","sob","ifs","tab","ara","dab","jag","jar","arm","lot","tom","sax","tex","yum","pei","wen","wry","ire","irk","far","mew","wit","doe","gas","rte","ian","pot","ask","wag","hag","amy","nag","ron","soy","gin","don","tug","fay","vic","boo","nam","ave","buy","sop","but","orb","fen","paw","his","sub","bob","yea","oft","inn","rod","yam","pew","web","hod","hun","gyp","wei","wis","rob","gad","pie","mon","dog","bib","rub","ere","dig","era","cat","fox","bee","mod","day","apr","vie","nev","jam","pam","new","aye","ani","and","ibm","yap","can","pyx","tar","kin","fog","hum","pip","cup","dye","lyx","jog","nun","par","wan","fey","bus","oak","bad","ats","set","qom","vat","eat","pus","rev","axe","ion","six","ila","lao","mom","mas","pro","few","opt","poe","art","ash","oar","cap","lop","may","shy","rid","bat","sum","rim","fee","bmw","sky","maj","hue","thy","ava","rap","den","fla","auk","cox","ibo","hey","saw","vim","sec","ltd","you","its","tat","dew","eva","tog","ram","let","see","zit","maw","nix","ate","gig","rep","owe","ind","hog","eve","sam","zoo","any","dow","cod","bed","vet","ham","sis","hex","via","fir","nod","mao","aug","mum","hoe","bah","hal","keg","hew","zed","tow","gog","ass","dem","who","bet","gos","son","ear","spy","kit","boy","due","sen","oaf","mix","hep","fur","ada","bin","nil","mia","ewe","hit","fix","sad","rib","eye","hop","haw","wax","mid","tad","ken","wad","rye","pap","bog","gut","ito","woe","our","ado","sin","mad","ray","hon","roy","dip","hen","iva","lug","asp","hui","yak","bay","poi","yep","bun","try","lad","elm","nat","wyo","gym","dug","toe","dee","wig","sly","rip","geo","cog","pas","zen","odd","nan","lay","pod","fit","hem","joy","bum","rio","yon","dec","leg","put","sue","dim","pet","yaw","nub","bit","bur","sid","sun","oil","red","doc","moe","caw","eel","dix","cub","end","gem","off","yew","hug","pop","tub","sgt","lid","pun","ton","sol","din","yup","jab","pea","bug","gag","mil","jig","hub","low","did","tin","get","gte","sox","lei","mig","fig","lon","use","ban","flo","nov","jut","bag","mir","sty","lap","two","ins","con","ant","net","tux","ode","stu","mug","cad","nap","gun","fop","tot","sow","sal","sic","ted","wot","del","imp","cob","way","ann","tan","mci","job","wet","ism","err","him","all","pad","hah","hie","aim","ike","jed","ego","mac","baa","min","com","ill","was","cab","ago","ina","big","ilk","gal","tap","duh","ola","ran","lab","top","gob","hot","ora","tia","kip","han","met","hut","she","sac","fed","goo","tee","ell","not","act","gil","rut","ala","ape","rig","cid","god","duo","lin","aid","gel","awl","lag","elf","liz","ref","aha","fib","oho","tho","her","nor","ace","adz","fun","ned","coo","win","tao","coy","van","man","pit","guy","foe","hid","mai","sup","jay","hob","mow","jot","are","pol","arc","lax","aft","alb","len","air","pug","pox","vow","got","meg","zoe","amp","ale","bud","gee","pin","dun","pat","ten","mob"]

console.log(ladderLength(beginWord, endWord, wordList), 'result');
// @lc code=end

