window.addEventListener("DOMContentLoaded", function () {
    fetch("/songs", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }

    })
        .then((res) => res.json())
        .then((songs) => {
            document.getElementById("songList").innerHTML = songs.map((song) => {
                return `
                <li id="${song.id}">
                    <b>ID: ${song.id}</b> <br> Name :  <b> ${song.name} </b> <br> Author :  <b> ${song.author} </b>
                </li>
            `
            }).join("");
        })
}, false);

const addNewSong = () => {
    const newSong = prompt("Song name & author (separated by a comma)");
    if (newSong) {
        const [name, author] = newSong.split(",");
        fetch("/songs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, author }),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    document.getElementById("songList").innerHTML += `
                    <li id="${res.id}">
                        <b>ID: ${res.id}</b> <br> Name :  <b> ${name} </b> <br> Author :  <b> ${author} </b>
                    </li>
                `
                }
            });
    }
};

const deleteSong = () => {
    const songPrompt = prompt("Song ID");
    if (!songPrompt) return alert("Invalid song ID");
    const songId = parseInt(songPrompt);
    if (songId) {
        fetch(`/songs/${songId}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    document.getElementById(songId).remove();
                }
            });
    }
};

const updateSong = () => {
    const songPrompt = prompt("Song ID");
    if (!songPrompt) return alert("Invalid song ID");
    const songId = parseInt(songPrompt);
    if (songId) {
        const newSong = prompt("Song name & author (separated by a comma)");
        if (newSong) {
            const [name, author] = newSong.split(",");
            fetch(`/songs/${songId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, author }),
            })
                .then((res) => res.json())
                .then((res) => {
                    if (res.success) {
                        document.getElementById(songId).innerHTML = `
                            <b>ID: ${songId}</b> <br> Name :  <b> ${name} </b> <br> Author :  <b> ${author} </b>
                    `
                    }
                });
        }
    }
};    