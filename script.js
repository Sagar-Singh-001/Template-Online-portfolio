function submitForm(event) {
  event.preventDefault(); 
  
  const fullName = document.getElementById('full-name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const company = document.getElementById('company').value;
  const jobTitle = document.getElementById('job-title').value;
  const startDate = document.getElementById('start-date').value;
  const endDate = document.getElementById('end-date').value;
  const jobDescription = document.getElementById('job-description').value;
  const school = document.getElementById('school').value;
  const degree = document.getElementById('degree').value;
  const major = document.getElementById('major').value;
  const graduationDate = document.getElementById('graduation-date').value;
  const skill1 = document.getElementById('skill-1').value;
  const skill2 = document.getElementById('skill-2').value;


  const fullNameElement = document.createElement('p');
  fullNameElement.textContent = `Full Name: ${fullName}`;

  const emailElement = document.createElement('p');
  emailElement.textContent = `Email: ${email}`;

  const phoneElement = document.createElement('p');
  phoneElement.textContent = `Phone: ${phone}`;

  const addressElement = document.createElement('p');
  addressElement.textContent = `Address: ${address}`;

  const companyElement = document.createElement('p');
  companyElement.textContent = `Company: ${company}`;

  const jobTitleElement = document.createElement('p');
  jobTitleElement.textContent = `Job Title: ${jobTitle}`;

  const startDateElement = document.createElement('p');
  startDateElement.textContent = `Start Date: ${startDate}`;

  const endDateElement = document.createElement('p');
  endDateElement.textContent = `End Date: ${endDate}`;

  const jobDescriptionElement = document.createElement('p');
  jobDescriptionElement.textContent = `Job Description: ${jobDescription}`;

  const schoolElement = document.createElement('p');
  schoolElement.textContent = `School: ${school}`;

  const degreeElement = document.createElement('p');
  degreeElement.textContent = `Degree: ${degree}`;

  const majorElement = document.createElement('p');
  majorElement.textContent = `Major: ${major}`;

  const graduationDateElement = document.createElement('p');
  graduationDateElement.textContent = `Graduation Date: ${graduationDate}`;

  const skill1Element = document.createElement('p');
  skill1Element.textContent = `Skill 1: ${skill1}`;

  const skill2Element = document.createElement('p');
  skill2Element.textContent = `Skill 2: ${skill2}`;

  document.getElementById('Personal').reset();

  const submittedDataElement = document.getElementById('submitted-data');
  submittedDataElement.innerHTML = '';
  submittedDataElement.appendChild(fullNameElement);
  submittedDataElement.appendChild(emailElement);
  submittedDataElement.appendChild(phoneElement);
  submittedDataElement.appendChild(addressElement);
  submittedDataElement.appendChild(companyElement);
  submittedDataElement.appendChild(jobTitleElement);
  submittedDataElement.appendChild(startDateElement);
  submittedDataElement.appendChild(endDateElement);
  submittedDataElement.appendChild(jobDescriptionElement);
  submittedDataElement.appendChild(schoolElement);
  submittedDataElement.appendChild(degreeElement);
  submittedDataElement.appendChild(majorElement);
  submittedDataElement.appendChild(graduationDateElement);
  submittedDataElement.appendChild(skill1Element);
  submittedDataElement.appendChild(skill2Element);
 



}
