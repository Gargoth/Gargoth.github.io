function updateLetter() {
    letterHandler.innerHTML = letters.text[currentLetter];
}

function next() {
    currentLetter++;
    if (currentLetter >= letters.text.length) {
        currentLetter = 0
    }
    updateLetter();
}

function back() {
    currentLetter--;
    if (currentLetter < 0) {
        currentLetter = letters.text.length - 1;
    }
    updateLetter();
}

console.log("functions loaded");

var letters = {
    "text": [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum amet atque libero voluptate sint, pariatur dolores mollitia error repellendus nihil modi illo. Tempora, modi. Iste quas distinctio laudantium voluptatem voluptate. Fugiat non quae ducimus praesentium totam aliquam velit cupiditate. Possimus voluptatibus id debitis maiores eligendi dolorem dolore reprehenderit explicabo qui autem quis adipisci, eos voluptates aut facere sed porro officia, similique nobis voluptatem tenetur! Dolorum est ipsa excepturi impedit at earum maiores deleniti nostrum sapiente consequuntur, debitis perferendis cumque eum corrupti quis voluptate nisi, dolores nemo dignissimos labore asperiores laboriosam quos! Quod, voluptas tempora assumenda excepturi, animi iusto necessitatibus maxime dolor dignissimos quae labore facilis provident. Ea rem omnis odit? Magni sed expedita ullam repellat dolores. Quidem, doloremque dolorum asperiores unde et aliquid quas omnis natus ullam ea amet quod ad, eligendi consectetur optio id modi aspernatur, ducimus distinctio rem inventore? Laborum, suscipit velit vitae quia beatae praesentium quos accusamus? Molestiae quis corrupti rerum fugiat est ipsa repellendus atque inventore! Numquam quod mollitia praesentium odit? Ratione, ipsum. Qui ducimus sit quas veniam consequuntur vitae facere quasi rerum nostrum aspernatur fugiat minima sequi expedita error hic autem, voluptatem, reiciendis, repudiandae omnis sunt id! Itaque porro distinctio tenetur laudantium sequi rem aliquam amet laborum quam placeat, tempora soluta officiis iusto vel aut inventore expedita ab animi id veritatis. Cumque quod impedit ratione, maxime, laudantium ullam vel officiis maiores ex eligendi eius. Deserunt dolorem, nobis itaque et officia ipsa! Sunt quo quod corrupti, esse illo, magnam nesciunt qui expedita doloribus reiciendis veniam dolores enim vel ipsam, provident repellendus quisquam blanditiis laudantium numquam minima quam libero. Labore nobis consequatur ipsa ipsum molestias iure animi assumenda enim illo consequuntur, optio, delectus harum? Rem vero nesciunt possimus tempora cumque labore officia distinctio itaque id temporibus tenetur iure sint nobis, laudantium inventore architecto perferendis a earum nisi. Doloremque consequatur sed dolorem unde, distinctio nulla alias eius praesentium, excepturi labore reiciendis deserunt sapiente dignissimos dolor commodi itaque blanditiis ad repellat tempora nesciunt quia ducimus accusantium aspernatur. Nemo sunt incidunt vero, facere inventore itaque autem quia doloremque magnam nesciunt excepturi modi, atque eaque eligendi error voluptatum laboriosam sapiente temporibus corrupti officia mollitia, minima tempora. Eaque sapiente aperiam modi quas quae commodi saepe et nesciunt. Sed, quidem consequatur id nihil doloribus provident eius voluptatum maiores? Mollitia voluptatem qui minima quam? Esse, temporibus ipsam! Odit ipsa earum obcaecati inventore assumenda, voluptas itaque nam praesentium ut, harum, aspernatur cum dolorem laborum temporibus dignissimos id reprehenderit? Qui vero, sit tempora aspernatur iure debitis iste pariatur veritatis rerum eveniet quidem totam natus ducimus possimus veniam velit distinctio quasi facere adipisci cum est minus nulla. Iste vero, perferendis, eveniet ut maxime, obcaecati non deleniti illo molestiae neque tempora porro sapiente veniam placeat aperiam? Deleniti exercitationem deserunt atque eius ipsa consequuntur cum quae temporibus quos hic tenetur officiis minus odit, sapiente quidem? Laboriosam unde adipisci velit sed veniam tempora similique, ratione nostrum natus dolorum voluptatibus exercitationem et totam ad aspernatur ea soluta repellat aut provident. A, dicta tempore. Ipsum quam mollitia voluptatem nihil nesciunt earum repellat, dicta reiciendis neque eius saepe accusamus odio ad corrupti excepturi in recusandae tempora commodi sapiente facilis hic aperiam? At, doloribus nostrum quo neque iste, aliquid optio suscipit voluptatibus, beatae eum soluta assumenda. Sit quisquam, illo magnam corrupti, totam atque earum iure est consequatur eum mollitia sint impedit laboriosam enim at, vero dolore minima reprehenderit quas saepe fugit nihil ab ea! Neque vero laborum fuga similique modi quas. Vel voluptatem eaque repellat omnis. Quae nam beatae necessitatibus, dolorem quisquam natus. Molestiae, corporis iusto eligendi voluptatem sunt adipisci eos culpa perspiciatis velit nobis. Nulla commodi corrupti vitae vero minus quibusdam laboriosam exercitationem!',
        '2',
        '3',
        '4'
    ],
    "images": [
        'q',
        'w',
        'e',
        'r'
    ]
}

console.log("letters loaded");

var letterHandler = document.getElementsByClassName("letter-handler")[0];
var currentLetter = 0;

console.log("vars loaded")

updateLetter();