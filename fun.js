newFunction();

function newFunction() {

    // This function appends a chat message to the chat body
function appendMessage(message, sender) {
    const chatBody = document.querySelector('.chat-body');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.textContent = message;
    chatBody.appendChild(messageDiv);
}

// This function handles the chatbot's response and displays it
function handleChatbotResponse(response) {
    appendMessage(response, 'chatbot');
}

// Attach event listeners to the YES and NO buttons
document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('collegeyes');
    const noButton = document.getElementById('collegeno');

    yesButton.addEventListener('click', function() {
        appendMessage("Great! How can I assist you?", 'chat');
        setTimeout(function() {
            handleChatbotResponse("Feel free to ask any questions you have.");
        }, 1000);
    });

    noButton.addEventListener('click', function() {
        appendMessage("Alright. If you need information about SRM IST, just let me know!", 'chat');
        setTimeout(function() {
            handleChatbotResponse("I'm here to help.");
        }, 1000);
    });
});

    
    const chatbody = document.querySelector(".chat-body");

    document.getElementById("collegeyes").onclick = function () {
        //location.href = "https://sp.srmist.edu.in/srmiststudentportal/students/loginManager/youLogin.jsp"
        window.open("https://sp.srmist.edu.in/srmiststudentportal/students/loginManager/youLogin.jsp");

    };

    document.getElementById("collegeno").onclick = function () {
      
        const messageEle = document.createElement("div");
        messageEle.className = 'chats';

        let texta = document.createTextNode("No");
        messageEle.append(texta);

        let text = document.createTextNode("\nHow can we Help you");


        let button1 = document.createElement("button");
        button1.className = "button_js";
        button1.innerHTML = "Looking for Admission?";
        //hiding button
        const no = document.querySelector("#collegeno");
        console.log(no.style);
        no.style.display = "none";
        const yes = document.querySelector("#collegeyes");
        console.log(no.style);
        yes.style.display = "none";




        button1.onclick = function () {

            const message = document.createElement("div");
            let texta = document.createTextNode("Looking For Admission?");
            message.className = 'chats';
            message.append(texta);

            let button3 = document.createElement("button");
            button3.innerHTML = "Admission Form";
            button3.className = "button_js_b3";
            button3.onclick = function () {

                let text = document.createTextNode("Admission Form");
                message.append(text);

                window.open("https://www.srmist.edu.in/admissions/");
            };

            let button4 = document.createElement("button");
            button4.innerHTML = "Fee Structure";
            button4.className = "button_js_b4";
            button4.onclick = function () {

                let text = document.createTextNode("Fee Structure");
                message.append(text);
                window.open("https://collegedunia.com/university/25896-srm-institute-of-science-and-technology-srmist-chennai/courses-fees#5");

            };

            let button5 = document.createElement("button");
            button5.innerHTML = "Admission Procedure";
            button5.className = "button_js_b5";
            button5.onclick = function () {

                let text = document.createTextNode("Admission Procedure");
                message.append(text);

                window.open("https://www.srmist.edu.in/admission-india/");

            };

            let button6 = document.createElement("button");
            button6.innerHTML = "Brochure";
            button6.className = "button_js_b6";
            button6.onclick = function () {
                let text = document.createTextNode("Leaflate");
                message.append(text);
                window.open("https://webstor.srmist.edu.in/web_assets/downloads/2023/arvr-2023-brochure.pdf");
            };


            button1.style.display = "none";
            button2.style.display = "none";

            message.append(button3);
            message.append(button4);
            message.append(button5);
            message.append(button6);

            chatbody.append(message);
        };

        let button2 = document.createElement("button");
        button2.innerHTML = "Know about the College";
        button2.className = "button_js_left";
        button2.onclick = function () {

            const message = document.createElement("div");
            message.className = 'chats';
            let text = document.createTextNode("Know about the College");
            message.append(text);

            let button_dep = document.createElement("button");
            button_dep.className = "button_js_dep";
            button_dep.innerHTML = "Departments";
            button_dep.onclick = function () {

                const messageElem = document.createElement("div");
                messageElem.className = 'chats';
                const input = document.querySelector('.input-section');
                input.style.height = "230px";

                let text = document.createTextNode("Departments");
                messageElem.append(text);

                let button_fyes = document.createElement("button");
                button_fyes.innerHTML = "First Year Engineering Sciences";
                button_fyes.className = "button_js_fyes";
                button_fyes.onclick = function () {

                    let text = document.createTextNode("First Year Engineering Sciences");
                    messageElem.append(text);
                    window.open("https://www.srmist.edu.in/college/college-of-engineering-technology/");
                    button_fyes.style.display = "none";
                    button_ee.style.display = "none";
                    button_aids.style.display = "none";
                    button_entc.style.display = "none";
                    button_ce.style.display = "none";
                    button_it.style.display = "none";
                    button_ie.style.display = "none";
                    input.style.height = "0px";
                };
                messageElem.append(button_fyes);

                let button_ee = document.createElement("button");
                button_ee.innerHTML = "Electrical Engineering";
                button_ee.className = "button_js_ee";
                button_ee.onclick = function () {
                    let text = document.createTextNode("Electrical Engineering");
                    messageElem.append(text);
                    window.open("https://www.srmist.edu.in/department/department-of-electrical-and-electronics-engineering/");
                    button_fyes.style.display = "none";
                    button_ee.style.display = "none";
                    button_aids.style.display = "none";
                    button_entc.style.display = "none";
                    button_ce.style.display = "none";
                    button_it.style.display = "none";
                    button_ie.style.display = "none";
                    input.style.height = "0px";

                };
                messageElem.append(button_ee);

                let button_entc = document.createElement("button");
                button_entc.innerHTML = "Electronics & Telecommunication";
                button_entc.className = "button_js_entc";
                button_entc.onclick = function () {

                    let text = document.createTextNode("Electronics & Telecommunication");
                    messageElem.append(text);
                    window.open("https://www.srmist.edu.in/department/department-of-electronics-communication/");
                    button_fyes.style.display = "none";
                    button_ee.style.display = "none";
                    button_aids.style.display = "none";
                    button_entc.style.display = "none";
                    button_ce.style.display = "none";
                    button_it.style.display = "none";
                    button_ie.style.display = "none";
                    input.style.height = "0px";
                };
                messageElem.append(button_entc);

                let button_aids = document.createElement("button");
                button_aids.innerHTML = "Artificial Intelligence and Data Science";
                button_aids.className = "button_js_aids";
                button_aids.onclick = function () {
                    let text = document.createTextNode("Artificial Intelligence and Data Science");
                    messageElem.append(text);
                    window.open("https://www.srmist.edu.in/program/b-tech-artificial-intelligence/");
                    button_fyes.style.display = "none";
                    button_ee.style.display = "none";
                    button_aids.style.display = "none";
                    button_entc.style.display = "none";
                    button_ce.style.display = "none";
                    button_it.style.display = "none";
                    button_ie.style.display = "none";
                    input.style.height = "0px";
                };
                messageElem.append(button_aids);

                let button_ce = document.createElement("button");
                button_ce.innerHTML = "Computer Engineering";
                button_ce.className = "button_js_ce";
                button_ce.onclick = function () {
                    window.open("https://www.srmist.edu.in/program/b-tech-computer-science-and-engineering/");
                    button_fyes.style.display = "none";
                    button_ee.style.display = "none";
                    button_aids.style.display = "none";
                    button_entc.style.display = "none";
                    button_ce.style.display = "none";
                    button_it.style.display = "none";
                    button_ie.style.display = "none";
                    input.style.height = "0px";
                };
                messageElem.append(button_ce);

                let button_it = document.createElement("button");
                button_it.innerHTML = "Information Technology";
                button_it.className = "button_js_it";
                button_it.onclick = function () {
                    window.open("https://srmrmp.edu.in/academics/department-of-information-technology/");
                    button_fyes.style.display = "none";
                    button_ee.style.display = "none";
                    button_aids.style.display = "none";
                    button_entc.style.display = "none";
                    button_ce.style.display = "none";
                    button_it.style.display = "none";
                    button_ie.style.display = "none";
                    input.style.height = "0px";
                };
                messageElem.append(button_it);

                let button_ie = document.createElement("button");
                button_ie.innerHTML = "Instrumentation Engineering";
                button_ie.className = "button_js_ie";
                button_ie.onclick = function () {
                    window.open("https://www.srmist.edu.in/department/department-of-electronics-instrumentation/");
                    button_fyes.style.display = "none";
                    button_ee.style.display = "none";
                    button_aids.style.display = "none";
                    button_entc.style.display = "none";
                    button_ce.style.display = "none";
                    button_it.style.display = "none";
                    button_ie.style.display = "none";
                    input.style.height = "0px";
                };
                messageElem.append(button_ie);

                chatbody.append(messageElem);

                button_dep.style.display = "none";
                button_pl.style.display = "none";
                button_Ec.style.display = "none";
                button_cl.style.display = "none";
                button_a.style.display = "none";


            };

            let button_pl = document.createElement("button");
            button_pl.className = "button_js_pl";
            button_pl.innerHTML = "Placements";
            button_pl.onclick = function () {

                const Message = document.createElement("div");
                Message.className = 'chats';
                let text = document.createTextNode("Placements");
                Message.append(text);
                const input = document.querySelector('.input-section');
                input.style.height = "100px";

                let button_tp = document.createElement("button");
                button_tp.innerHTML = "Contact";
                button_tp.className = "button_js_tp";
                button_tp.onclick = function () {
                    window.open("https://www.srmist.edu.in/contact-us/");
                    button_tp.style.display = "none";
                    button_pr.style.display = "none";
                    input.style.height = "0px";
                };
                Message.append(button_tp);

                let button_pr = document.createElement("button");
                button_pr.innerHTML = "Placement Report";
                button_pr.className = "button_js_pr";
                button_pr.onclick = function () {
                    window.open("https://www.srmist.edu.in/placements/placement-statistics/");
                    button_tp.style.display = "none";
                    button_pr.style.display = "none";
                    input.style.height = "0px";
                };
                Message.append(button_pr);

                chatbody.append(Message);

                button_dep.style.display = "none";
                button_pl.style.display = "none";
                button_Ec.style.display = "none";
                button_cl.style.display = "none";
                button_a.style.display = "none";
            };

            let button_Ec = document.createElement("button");
            button_Ec.className = "button_js_Ec";
            button_Ec.innerHTML = "Extra Curricular";
            button_Ec.onclick = function () {

                const Message = document.createElement("div");
                Message.className = 'chats';
                let text = document.createTextNode("Extra Curricular");
                Message.append(text);
                const input = document.querySelector('.input-section');
                input.style.height = "100px";

                let button_ns = document.createElement("button");
                button_ns.innerHTML = "NSS";
                button_ns.className = "button_js_ns";
                button_ns.onclick = function () {
                    window.open("https://www.srmist.edu.in/nss/");
                    button_ns.style.display = "none";
                    button_tc.style.display = "none";
                    button_al.style.display = "none";
                    button_ic.style.display = "none";
                    button_pb.style.display = "none";
                    button_ia.style.display = "none";
                    input.style.height = "0px";
                };
                Message.append(button_ns);

                let button_tc = document.createElement("button");
                button_tc.innerHTML = "SRMist Achievements";
                button_tc.className = "button_js_tc";
                button_tc.onclick = function () {
                    window.open("https://www.srmist.edu.in/department/department-of-electrical-and-electronics-engineering/awards-accolades/student-achievements/");
                    button_ns.style.display = "none";
                    button_tc.style.display = "none";
                    button_al.style.display = "none";
                    button_ic.style.display = "none";
                    button_pb.style.display = "none";
                    button_ia.style.display = "none";
                    input.style.height = "0px";
                };
                Message.append(button_tc);

                let button_al = document.createElement("button");
                button_al.innerHTML = "SRM Milan'23";
                button_al.className = "button_js_al";
                button_al.onclick = function () {
                    window.open("https://www.srmmilan.org/");
                    button_ns.style.display = "none";
                    button_tc.style.display = "none";
                    button_al.style.display = "none";
                    button_ic.style.display = "none";
                    button_pb.style.display = "none";
                    button_ia.style.display = "none";
                    input.style.height = "0px";
                };
                Message.append(button_al);

                let button_ic = document.createElement("button");
                button_ic.innerHTML = "Entrepreneurship course";
                button_ic.className = "button_js_ic";
                button_ic.onclick = function () {
                    window.open("https://www.srmonline.in/course/Entrepreneurship");
                    button_ns.style.display = "none";
                    button_tc.style.display = "none";
                    button_al.style.display = "none";
                    button_ic.style.display = "none";
                    button_pb.style.display = "none";
                    button_ia.style.display = "none";
                    input.style.height = "0px";
                };
                Message.append(button_ic);

                let button_pb = document.createElement("button");
                button_pb.innerHTML = "SRM Professional Bodies";
                button_pb.className = "button_js_pb";
                button_pb.onclick = function () {
                    window.open("https://www.srmist.edu.in/department/department-of-computing-technologies/student-clubs-professional-chapters-and-association-bodies/");
                    button_ns.style.display = "none";
                    button_tc.style.display = "none";
                    button_al.style.display = "none";
                    button_ic.style.display = "none";
                    button_pb.style.display = "none";
                    button_ia.style.display = "none";
                    input.style.height = "0px";
                };
                Message.append(button_pb);

                let button_ia = document.createElement("button");
                button_ia.innerHTML = "Contect-US SRMist";
                button_ia.className = "button_js_ia";
                button_ia.onclick = function () {
                    window.open("https://m.indiacustomercare.com/srm-university-helpline-numbers#gsc.tab=0");
                    button_ns.style.display = "none";
                    button_tc.style.display = "none";
                    button_al.style.display = "none";
                    button_ic.style.display = "none";
                    button_pb.style.display = "none";
                    button_ia.style.display = "none";
                    input.style.height = "0px";
                };
                Message.append(button_ia);

                chatbody.append(Message);

                button_dep.style.display = "none";
                button_pl.style.display = "none";
                button_Ec.style.display = "none";
                button_cl.style.display = "none";
                button_a.style.display = "none";
            };

            let button_cl = document.createElement("button");
            button_cl.className = "button_js_cl";
            button_cl.innerHTML = "SRM Central Library";
            button_cl.onclick = function () {
                window.open("https://www.srmist.edu.in/library/");
                button_dep.style.display = "none";
                button_pl.style.display = "none";
                button_Ec.style.display = "none";
                button_cl.style.display = "none";
                button_a.style.display = "none";
            };

            let button_a = document.createElement("button");
            button_a.className = "button_js_a";
            button_a.innerHTML = "Achievements";
            button_a.onclick = function () {

                const Message1 = document.createElement("div");
                Message1.className = 'chats';
                let text = document.createTextNode("Achievements");
                Message1.append(text);
                const input = document.querySelector('.input-section');
                input.style.height = "100px";

                let button_fa = document.createElement("button");
                button_fa.className = "button_js_fa";
                button_fa.innerHTML = "Faculty Achievements";
                button_fa.onclick = function () {
                    window.open("https://www.srmist.edu.in/faculty-gateway/faculty-achivements/");
                    button_fa.style.display = "none";
                    button_sa.style.display = "none";
                    button_ntsa.style.display = "none";
                    input.style.height = "0px";
                };
                Message1.append(button_fa);

                let button_sa = document.createElement("button");
                button_sa.className = "button_js_sa";
                button_sa.innerHTML = "Student Achievements";
                button_sa.onclick = function () {
                    window.open("https://www.srmist.edu.in/parents/student-achievements/");
                    button_fa.style.display = "none";
                    button_sa.style.display = "none";
                    button_ntsa.style.display = "none";
                    input.style.height = "0px";
                };
                Message1.append(button_sa);

                let button_ntsa = document.createElement("button");
                button_ntsa.className = "button_js_ntsa";
                button_ntsa.innerHTML = "Alumni achievements";
                button_ntsa.onclick = function () {
                    window.open("https://alumni.srmist.edu.in/");
                    button_fa.style.display = "none";
                    button_sa.style.display = "none";
                    button_ntsa.style.display = "none";
                    input.style.height = "0px";
                };
                Message1.append(button_ntsa);

                chatbody.append(Message1);

                button_dep.style.display = "none";
                button_pl.style.display = "none";
                button_Ec.style.display = "none";
                button_cl.style.display = "none";
                button_a.style.display = "none";

            };
            button1.style.display = "none";
            button2.style.display = "none";
            message.append(button_dep);
            message.append(button_pl);
            message.append(button_Ec);
            message.append(button_cl);
            message.append(button_a);
            chatbody.append(message);
        };

        messageEle.append(text);
        messageEle.append(button1);
        messageEle.append(button2);
        chatbody.append(messageEle);
    };
}


