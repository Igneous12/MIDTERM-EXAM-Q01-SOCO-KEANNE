const express = require("express");

const app = express();

const PORT = 3000;

const requests = [
    {
        id: 1,
        requester: "Keen",
        location: "Cebu",
        problem: "Broken Faucete",
        priority: "High",
        status: "Ongoing"
    },
    {
        id: 2,
        requester: "Jeel",
        location: "Mandaue",
        problem: "No Electricity",
        priority: "High",
        status: "Pending"
    },
    {
        id: 3,
        requester: "Keet",
        location: "Cebu",
        problem: "Broken Bike",
        priority: "Low",
        status: "Pending"
    }
];

app.get("/api/requests", (req, res) => {
    res.json(requests);
});


app.get("/api/requests/:id", (req, res) => {
    const id = Number(req.params.id);
    const request = requests.find(request =>
        request.id == id
    );

    if (!request) {
        return res.status(404).json({
            message: "Request not found"
        });
    }

    res.json(request);
});

app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});