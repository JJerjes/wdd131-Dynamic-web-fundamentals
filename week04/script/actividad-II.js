let aCourse = {
    code: 'WDD131',
    title: 'Dynamic Web Fundamentals',
    credits: 2,
    sections: [
        { section: '1A', enrolled: 20, instructor: 'Jerjes Mariluz'},
        { section: '2A', enrolled: 30, instructor: 'Job Mariluz' }
    ]
};


function setTitle (course) {
    const titleMain = document.querySelector('#courseName');
    titleMain.textContent = `${course.code} - ${course.title}`
    // document.querySelector('#courseName').innerHTML = `${course.code} - ${course.title}`
}

function sectionsInformation (section) {
    return `<tr> 
                <td>${section.section}</td>
                <td>${section.enrolled}</td>
                <td>${section.instructor}</td>
            </tr>`;
}

function redenSection (sections) {
    const html = sections.map(sectionsInformation);
    document.querySelector('#sections tbody').innerHTML = html.join('');
}


setTitle(aCourse);
redenSection(aCourse.sections)