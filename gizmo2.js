function openMenu(){
    const menu = document.querySelector('.menu');
    menu.classList.add('show');
}
function closeMenu(){
    const menu = document.querySelector('.menu');
    menu.classList.remove('show');
}

function showAnswer(button) {
    var answer = button.parentNode.nextElementSibling;
    var questionContent = button.parentNode.parentNode;
    var icon = button.parentNode.querySelector('i');

    answer.classList.toggle('show');
    questionContent.classList.toggle('expanded');
    icon.classList.toggle('icon_color');

    if (answer.classList.contains('show')) {
        button.textContent = '-'; 
    } else {
        button.textContent = '+'; 
    }
}




document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const question = document.getElementById('question').value.toLowerCase();

    const response = processQuestion(question);
    displayTypingEffect(response);
});

function processQuestion(question) {

    const qaPairs = {
        "where is gizmo located?": "Our Gizmoetc Company is located in Donasco St. Bagong Lungsod, Tandag City.",
        "what types of cctv systems do you offer?": "We offer a variety of CCTV systems tailored to meet different needs. Our options include analog cameras for traditional setups, IP cameras for high-definition digital video, and wireless systems for flexible installation. Each system is designed to provide reliable surveillance and enhance security measures.",
        "how secure are your biometric time & attendance systems?": "Our biometric time & attendance systems prioritize security and accuracy. They utilize advanced encryption protocols to protect biometric data and ensure compliance with privacy regulations. With robust authentication methods, such as fingerprint and facial recognition, our systems offer reliable attendance tracking and access control.",
        "can your security access systems integrate with existing infrastructure?": "Yes, our security access systems are designed to seamlessly integrate with a wide range of existing infrastructure. Whether you have traditional keycard systems or advanced biometric readers in place, our solutions can be tailored to integrate smoothly, ensuring minimal disruption and maximum security enhancement.",
        "what software development services do you provide?": "We offer comprehensive software development services catering to diverse business needs. Our expertise spans custom software development, mobile app development, web applications, and enterprise solutions. Whether you need a bespoke application or enhancements to existing software, our team delivers innovative solutions aligned with your objectives.",
        "do you offer pos systems suitable for different business sizes?": "Absolutely. Our POS systems are versatile and scalable, catering to businesses of all sizes and industries. From small retail shops to large-scale enterprises, our POS solutions streamline transactions, inventory management, and customer engagement. We offer flexible configurations and robust features to meet the unique requirements of each business.",
        "gizmo history": "Gizmo was founded by a group of tech enthusiasts who shared a common vision: to create a platform where people could dive deep into the world of technology. Our journey began with a simple idea - to make technology accessible and understandable for everyone. Over the years, we've grown and evolved, but our commitment to delivering high-quality tech content remains unchanged.",
        "what is the meaning of gizmo?": "GizmoEtc Company, your comprehensive provider of cutting-edge technology solutions designed to enhance both personal and business environments. We specialize in a wide range of products and services tailored to meet modern-day challenges and opportunities."

    };

    const keywordResponses = [
        { keywords: ["gizmo", "location"], response: qaPairs["where is gizmo located?"] },
        { keywords: ["cctv", "systems"], response: qaPairs["what types of cctv systems do you offer?"] },
        { keywords: ["biometric", "time", "attendance"], response: qaPairs["how secure are your biometric time & attendance systems?"] },
        { keywords: ["security", "access", "infrastructure"], response: qaPairs["can your security access systems integrate with existing infrastructure?"] },
        { keywords: ["software", "development"], response: qaPairs["what software development services do you provide?"] },
        { keywords: ["pos", "systems", "business"], response: qaPairs["do you offer pos systems suitable for different business sizes?"] },
        { keywords: ["gizmo", "description", "gizmo meaning"], response: qaPairs["what is the meaning of gizmo?"] },
        { keywords: ["history", "company"], response: qaPairs["gizmo history"] },

    ];


    if (qaPairs[question]) {
        return qaPairs[question];
    }


    for (let i = 0; i < keywordResponses.length; i++) {
        const { keywords, response } = keywordResponses[i];
        if (keywords.every(keyword => question.includes(keyword))) {
            return response;
        }
    }

    return "I'm sorry, I don't know the answer to that question.";
}

function displayTypingEffect(text) {
    const responseElement = document.getElementById('response');
    responseElement.innerText = ''; 
    let i = 0;

    function type() {
        if (i < text.length) {
            responseElement.innerText += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }

    type();
}