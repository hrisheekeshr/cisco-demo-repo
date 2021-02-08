function fetchData(query) {
    let payload = {"questions": ["I want yellow colors in webex"],
                    "top_k_reader": 2,
                    "top_k_retriever": 5};
    payload.questions = query.split();
    let response = fetch( "http://34.87.20.92:8000/models/1/faq-qa", {
        method: 'POST',
        body: JSON.stringify(payload)
        }).then(response1 => response1.json())
        .then(data => console.log(data));
        
        
        console.log(response);
}