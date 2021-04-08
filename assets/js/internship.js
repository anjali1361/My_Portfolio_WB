/*Research Details Table*/

const researchTable = document.querySelector(".main");
const citeTable1 = document.querySelector(".citeT1");
const citeTable2 = document.querySelector(".citeT2");
const citeTable3 = document.querySelector(".citeT3");
const citeTable4 = document.querySelector(".citeT4");
const citeTable5 = document.querySelector(".citeT5");
const citeTable6 = document.querySelector(".citeT6");
const citeTable7 = document.querySelector(".citeT7");
const citeTable8 = document.querySelector(".citeT8");

const research = [
    {
        title : "Paid internship at Arenyam Technologies",
        authors : "Contact: arenyam.com, 7798574425",
        conferences : "A paid intern at Arenyam Technology worked as a Content Writer and a Marketer, writing and marketing for the java course that is going to be offered by the company to the college students in the period 25/01/2021-25/02/2021. The letter of recommendation and certificate will be issued soon.",
        researchYr : 2021,
        citebox : "#popup1",
        image : "assets/images/research-page/inteferenceNetwork.png"
    }
    // },

    // {
    //     title : "A Call for More Rigor in Unsupervised Cross-lingual Learning",
    //     authors : "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre",
    //     conferences : "The 58th Annual Meeting of the Association for Computational Linguistics",
    //     researchYr : 2020,
    //     citebox : "#popup2",
    //     image : "images/research-page/crossLingual.png"
    // },

    // {
    //     title : "A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks",
    //     authors : "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis",
    //     conferences : "The 58th Annual Meeting of the Association for Computational Linguistics",
    //     researchYr : 2020,
    //     citebox : "#popup3",
    //     image : "images/research-page/wordRepresentation.png"
    // },

    // {
    //     title : "A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking",
    //     authors : "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou",
    //     conferences : "The 58th Annual Meeting of the Association for Computational Linguistics",
    //     researchYr : 2020,
    //     citebox : "#popup4",
    //     image : "images/research-page/dialogueState.png"
    // },

    // {
    //     title : "Dual Super-Resolution Learning for Semantic Segmentation",
    //     authors : "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi",
    //     conferences : "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    //     researchYr : 2020,
    //     citebox : "#popup5",
    //     image : "images/research-page/semanticSegmentation.png"
    // },

    // {
    //     title : "Deep Unfolding Network for Image Super-Resolution",
    //     authors : "Zhang, Kai and Van Gool, Luc and Timofte, Radu",
    //     conferences : "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    //     researchYr : 2020,
    //     citebox : "#popup6",
    //     image : "images/research-page/deepNetwork.png"
    // },

    // {
    //     title : "Unsupervised Learning for Intrinsic Image Decomposition From a Single Image",
    //     authors : "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng",
    //     conferences : "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    //     researchYr : 2020,
    //     citebox : "#popup7",
    //     image : "images/research-page/imageDecomposition.png"
    // },

    // {
    //     title : "Forward and Backward Information Retention for Accurate Binary Neural Networks",
    //     authors : "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan",
    //     conferences : "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    //     researchYr : 2020,
    //     citebox : "#popup8",
    //     image : "images/research-page/neuralNetworks.jpg"
    // }
];

const cite1 = [{
    Role1 : "A paid intern at Arenyam Technology worked as a Content Writer, writing and developing contents for the java course that is going to be offered by the company to the college students in the period 25/01/2021-25/02/2021.",
    Role2: "Also I worked as a Marketer and promoted the session. Made e-flyer, pdf, prepared content and all necessary stuffs were done for the Marketer's job."
}];

const cite2 = [{
    Role1 : "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre. A Call for More Rigor in Unsupervised Cross-lingual Learning. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    Role2: "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre. A Call for More Rigor in Unsupervised Cross-lingual Learning. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
}];

const cite3 = [{
    Role1 : "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis. A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    Role2: "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis. A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
}];

const cite4 = [{
    Role1 : "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou. A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    Role2: "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou. A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
}];

const cite5 = [{
    Role1 : "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi. Dual Super-Resolution Learning for Semantic Segmentation. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    Role2: "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi. Dual Super-Resolution Learning for Semantic Segmentation. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020."
}];

const cite6 = [{
    Role1 : "Zhang, Kai and Van Gool, Luc and Timofte, Radu. Deep Unfolding Network for Image Super-Resolution. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    Role2: "Zhang, Kai and Van Gool, Luc and Timofte, Radu. Deep Unfolding Network for Image Super-Resolution. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020."
}];

const cite7 = [{
    Role1 : "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng. Unsupervised Learning for Intrinsic Image Decomposition From a Single Image. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    Role2: "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng. Unsupervised Learning for Intrinsic Image Decomposition From a Single Image. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020."
}];

const cite8 = [{
    Role1 : "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan. Forward and Backward Information Retention for Accurate Binary Neural Networks. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    Role2: "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan. Forward and Backward Information Retention for Accurate Binary Neural Networks. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020."
}];
    
const fillData = () => {
    let output = "";
    research.forEach(//research.forEach(function(){ statement  })

  
        ({image, title, authors, conferences, researchYr, citebox}) =>
        (output +=`
            <tr> 
            <td class="imgCol"><img src="${image}" class="rImg"></td>
            <td class = "researchTitleName">
            <div><span class="imgResponsive"><img src="${image}" class="imgRes"></span></div>
            <a href="#0" class="paperTitle"> ${title} </a> 
            <div> ${authors} </div> <div class="rConferences"> ${conferences} 
            <div class="researchY">${researchYr}</div>
            </div>
            
            <!--CITE BUTTON-->
            <span class = "resCite">
            <a href="${citebox}" class="button button-accent button-small">CITE</a>
            </span>
            </td>

            <td class="researchCite">
            <!--CITE BUTTON-->
            <a href="${citebox}" class="button button-accent button-small">CITE</a>
            </td>
            </tr>

            `)
        );
    researchTable.innerHTML = output;
};
// document.getElementById(id).onclick = fillDat , document.getElementById(id).style.background = "red"
//document.getElementById(id).addEventListener("DOMContentLoaded", fillData)we can add multiple events/multiple functions for same event using addEventListener(),useCapture para also used in this mthod,removeEventListener('event_name_which_is_to_be_removed',"corresponding fun")
document.addEventListener("DOMContentLoaded", fillData);//"DOMContentLoaded" is the event name

const citeData1 = () => {
    let output = "";
    cite1.forEach(
        ({Role1, Role2}) =>
        (output += `
        <tr> <td class="left-cell"> Role1 </td> <td class="right-cell">${Role1} </td></tr>
                    <tr> <td class="left-cell"> Role2</td> <td class="right-cell"> ${Role2}
                    </td></tr>                     
        `)
    );
    citeTable1.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", citeData1);

const citeData2 = () => {
    let output = "";
    cite2.forEach(
        ({Role1, Role2}) =>
        (output += `
        <tr> <td class="left-cell"> Role1 </td> <td class="right-cell">${Role1} </td></tr>
                    <tr> <td class="left-cell"> Role2</td> <td class="right-cell"> ${Role2}
                    </td></tr>                     
        `)
    );
    citeTable2.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", citeData2);

const citeData3 = () => {
    let output = "";
    cite3.forEach(
        ({Role1, Role2}) =>
        (output += `
        <tr> <td class="left-cell"> Role1 </td> <td class="right-cell">${Role1} </td></tr>
                    <tr> <td class="left-cell"> Role2</td> <td class="right-cell"> ${Role2}
                    </td></tr>                     
        `)
    );
    citeTable3.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", citeData3);

const citeData4 = () => {
    let output = "";
    cite4.forEach(
        ({Role1, Role2}) =>
        (output += `
        <tr> <td class="left-cell"> Role1 </td> <td class="right-cell">${Role1} </td></tr>
                    <tr> <td class="left-cell"> Role2</td> <td class="right-cell"> ${Role2}
                    </td></tr>                     
        `)
    );
    citeTable4.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", citeData4);

const citeData5 = () => {
    let output = "";
    cite5.forEach(
        ({Role1, Role2}) =>
        (output += `
        <tr> <td class="left-cell"> Role1 </td> <td class="right-cell">${Role1} </td></tr>
                    <tr> <td class="left-cell"> Role2</td> <td class="right-cell"> ${Role2}
                    </td></tr>                     
        `)
    );
    citeTable5.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", citeData5);

const citeData6 = () => {
    let output = "";
    cite6.forEach(
        ({Role1, Role2}) =>
        (output += `
        <tr> <td class="left-cell"> Role1 </td> <td class="right-cell">${Role1} </td></tr>
                    <tr> <td class="left-cell"> Role2</td> <td class="right-cell"> ${Role2}
                    </td></tr>                     
        `)
    );
    citeTable6.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", citeData6);

const citeData7 = () => {
    let output = "";
    cite7.forEach(
        ({Role1, Role2}) =>
        (output += `
        <tr> <td class="left-cell"> Role1 </td> <td class="right-cell">${Role1} </td></tr>
                    <tr> <td class="left-cell"> Role2</td> <td class="right-cell"> ${Role2}
                    </td></tr>                     
        `)
    );
    citeTable7.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", citeData7);

const citeData8 = () => {
    let output = "";
    cite8.forEach(
        ({Role1, Role2}) =>
        (output += `
        <tr> <td class="left-cell"> Role1 </td> <td class="right-cell">${Role1} </td></tr>
                    <tr> <td class="left-cell"> Role2</td> <td class="right-cell"> ${Role2}
                    </td></tr>                     
        `)
    );
    citeTable8.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", citeData8);
