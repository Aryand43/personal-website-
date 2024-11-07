import pdfplumber
import json
import re

def extract_section_text(text, start_keyword, end_keyword=None):
    """ Extracts a section from the text based on start and end keywords. """
    start_idx = text.find(start_keyword)
    if start_idx == -1:
        return None
    
    if end_keyword:
        end_idx = text.find(end_keyword, start_idx)
        if end_idx == -1:
            end_idx = len(text)
    else:
        end_idx = len(text)

    return text[start_idx:end_idx].strip()

# Load the resume PDF
with pdfplumber.open('Aryan_Dutt_Resume.pdf') as pdf:
    resume_content = ""
    for page in pdf.pages:
        text = page.extract_text()
        if text:
            resume_content += text + "\n"

# Define keywords for extracting sections
profile_summary = extract_section_text(resume_content, "Profile", "Education")
education = extract_section_text(resume_content, "Education", "Relevant Experience")
experience = extract_section_text(resume_content, "Relevant Experience", "Additional Experience")
additional_experience = extract_section_text(resume_content, "Additional Experience", "Skills")
skills = extract_section_text(resume_content, "Skills", "Honours and Awards")
honours_awards = extract_section_text(resume_content, "Honours and Awards", "Academic Projects")
projects = extract_section_text(resume_content, "Academic Projects", "Qualifications")
qualifications = extract_section_text(resume_content, "Qualifications")

# Organize the data in a structured format
resume_data = {
    "Profile Summary": profile_summary,
    "Education": re.split(r'\n•|\n', education) if education else [],
    "Experience": re.split(r'\n•|\n', experience) if experience else [],
    "Additional Experience": re.split(r'\n•|\n', additional_experience) if additional_experience else [],
    "Skills": re.split(r'\n•|\n', skills) if skills else [],
    "Honours and Awards": re.split(r'\n•|\n', honours_awards) if honours_awards else [],
    "Projects": re.split(r'\n◦|\n', projects) if projects else [],
    "Qualifications": re.split(r'\n•|\n', qualifications) if qualifications else []
}

# Save the structured content in JSON format
with open('resume_data.json', 'w') as json_file:
    json.dump(resume_data, json_file, indent=4)

print("Resume content extracted and saved to resume_data.json")
