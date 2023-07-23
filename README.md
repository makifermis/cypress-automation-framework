# cypress-automation-framework
COURSE NOTES
-1. Extensions:
	1.ES6 Macho Snippest
	2. Material Icon Theme
	3. .run "Code Runner"
	4. xpath extension
		support/e2e.js => require ('@cypress/xpath')
		terminal => npm install --save-dave @cypress/xpath
	5. Ronorex selocity added to the Chrome extensions


1. To run a specific test in cypress dashboard
./node_modules/.bin/cypress run --spec cypress/e2e/webdriver-uni/checkboxes.js --record --key 8c4f681a-5b8a-46b7-92fe-45ca2b240678  

2. npx(1) -- execute npm package binaries (simplify the commands)

	INSTALL
npm install -g npx

3. running the test mentionned in the package.json file under the 'scripts'

npm run <name of the custom script>

Example
npm run triggerAllTests-headless

4. To install Junit reporter

- npm install --save-dev cypress-multi-reporters mocha-junit-reporter

- copy below to the cypress.config.js

 reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json',
    },

- create a file in general folder with the name of 'reporter-config.json' and inside this file copy paste below

{
    "reporterEnabled": "spec, mocha-junit-reporter",
  "mochaJunitReporterReporterOptions": {
    "mochaFile": "cypress/results/junit/results-[hash].xml"
  }
}

- to merge all report files in one (in the name of 'results')
npx junit-merge -d cypress/results/junit -o cypress/results/junit/results.xml

5. mochawesome report

- npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator

- change the 'reporter-config.json' file into the below
{
    "reporterEnabled": "spec, cypress-multi-reporters",
  "mochaJunitReporterReporterOptions": {
    "mochaFile": "cypress/results/junit/results-[hash].xml"
  },
  "reporterOptions": {
    "reporterEnabled":"mochawesome",
    "mochawesomeReporterOptions": {
        "reportDir": "cypress/results/mochawesome",
        "quite": true,
        "overwrite": false,
        "html": false,
        "json": true
    }
  }
}

- to merge all mochawesome json files and create an html report execute the code below

npx mochawesome-merge cypress/results/mochawesome/*.json > mochawesome.json && npx marge mochawesome.json

6. To open the cypress app in different env configuration
Example= staging

npx cypress open --env configFile=staging

7. To make a test in specific env

npx cypress run --spec cypress/e2e/webdriver-uni/checkboxes.js --env configFile=staging --headed

8. to make multiple retries specific test

it('Should be able to submit a successful submission via contact us form',{
      retries: {
        runMode:3,
        openMode:2

      }
    },()=>{

9. Git baslangic

git config --global user.mail makifermis@gmail.com
git config --global user.name "Mehmet"

10. To control the github connection

git remote -v

11. To send the files first time to the github

git remote add origin + repoURL

**Note: It's always good to pull before making push the code to the github

12. To run some tests in specific browser 
Example 1
// Run the test if Cypress is running
// using the built-in Electron browser
it('has access to clipboard', { browser: 'electron' }, () => {
  ...
})

Example 2
describe('happy path suite', { browser: 'firefox' }, () => {
  it('...')
  it('...')
  it('...')
})

Example 3
 it('Should not be able to submit a successful submission via contact us form as all fields are required',()=>{  
        
        if(Cypress.isBrowser('firefox')) {
            
        }else{
            contact_Us_PO.contactForm_Submission(data.first_name,data.last_name,' ','How can I learn Cypress?','body','Error: Invalid email address')
 
        }
       
        
    })

13. Jenkins localhost:8080
username: admin
paswword: 0d218c51f63b4f8ba223388661196064

**Important: In order to run the Jenkins, open CMD prompt and execute "java -jar jenkins.war" this command under the place where the folder is located. For example if the jar folder is on the Desktop, it should be written likeC:\Users\HP\Desktop\Udemy_CypressCourse_2023> java -jar jenkins.war

14. For API testing, read the READ.ME document inside the JSON-SERVER project for configuration details

'json-server --watch db.json ' run this code in the bash terminal of cypress in order to follow the changes in the json server
or run 'npm run start'

15. To run a project in local machine, after installing a web page project with "git clone <github link>"
	a. First we write in vs code "npm install"
	b. to compile a browser application run  "npm start" in bash (angular-realworld-example)

16. To run a specific cucumber tag

npx cypress run --spec cypress/e2e/webdriver-uni/features/*.feature -e TAGS="@regression" --headed --browser chrome

