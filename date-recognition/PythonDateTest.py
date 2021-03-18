import PythonDate
import unittest
from datetime import datetime
from termcolor import colored

'''
NOTE: the URLS look weird because of the pylinting requirement.
Each url is seperated by a comma
USAGE: python3 PythonDateTest.py
Input the interested urls in the urls list. This list is ordered!
Input the corresponding date that you expect to extracter to return.
This list is ordered!
Make sure the url is in the same index as it's expected date in the dates list.

For the dates of homepages, I put null.
For articles that I know have a date, but are difficult to extract,
I also put null. This is up to the user.

Conclision:
The dateGuesser out beats the articleDateExtractor because of how
it can detect that a url is a homepage.
Note both did poor in the foreign articles i.e.
https://www.dw.com/uk/коментар-націоналізм-родом-зі-східної-європи/a-42081385
'''

urls = ['https://www.dw.com/uk/коментар-націоналізм-родом-зі' +
        '-східної-європи/a-42081385',
        'https://www.aljazeera.com/',
        'https://www.aljazeera.com/economy/' +
        '2020/10/7/trump-urges-congress-to-pass-targeted' +
        '-aid-after-halting-talks',
        'https://www.nytimes.com/',
        'https://www.nytimes.com/2020/10/03/us/' +
        'sean-conley-trump-doctor.html?action=click&module=' +
        'Spotlight&pgtype=Homepage',
        'https://www.cbc.ca/',
        'https://www.cbc.ca/radio/thecurrent/the-current-for-oct-' +
        '1-2020-1.5745953/' +
        'made-in-america-how-trump-and-biden-s-rival-visions-for-' +
        'economic-recovery-' +
        'are-resonating-with-illinois-voters-1.5746657'
        ]

dates = [None,
         None,
         datetime(2020, 10, 7),
         None,
         datetime(2020, 10, 4),
         None,
         datetime(2020, 10, 2)
         ]


class PythonDateTest(unittest.TestCase):

    def test_dateGuesser(self):
        correct = 0
        string = ""
        for i in range(len(urls)):
            dateObj = PythonDate.dateGuesser(urls[i])
            if (dateObj.date is None):
                if dates[i] is None:
                    correct += 1
                else:
                    string += "Incorrect Match! " + urls[i] + "\n" + \
                     "Date expected: " + str(dates[i]) + "\n" + \
                     "Date returned: " + str(dateObj) + "\n"

            elif (dates[i] is None):
                if (dateObj.date is None):
                    correct += 1
                else:
                    string += "Incorrect Match! " + urls[i] + "\n" + \
                     "Date expected: " + str(dates[i]) + "\n" + \
                     "Date returned: " + str(dateObj.date) + "\n"

            elif (dateObj is not None) and (dates[i] is not None):
                if (dateObj.date.date() == dates[i].date()):
                    correct += 1
                else:
                    string += "\n" + "Incorrect Match! " + urls[i] + "\n" \
                     + "Date expected: " + str(dates[i].date()) + "\n" \
                     + "Date returned: " + str(dateObj.date.date()) + "\n"
            else:
                string += "Incorrect Match! " + urls[i] + "\n" + \
                 "Date expected: " + str(dates[i].date()) + "\n" + \
                 "Date returned: " + str(dateObj.date.date()) + "\n"
                # print("Incorrect Match! " + urls[i])
                # print("Date expected: " + str(dates[i]))
                # print("Date returned: " + str(dateObj.date) + "\n")

        print(string)
        color = "dateGuesser had this many Correct number of dates: " \
            + str(correct) + " out of " + str(len(dates))
        print(colored(color, 'red'))
        self.assertTrue(correct, len(urls))

    def test_articleDateExtractor(self):
        correct = 0
        string = ""
        for i in range(len(urls)):
            dateObj = PythonDate.articleDateExtractorFunc(urls[i])
            if (dateObj is None):
                if dates[i] is None:
                    correct += 1
                else:
                    string += "Incorrect Match! " + urls[i] + "\n" + \
                     "Date expected: " + str(dates[i]) + "\n" + \
                     "Date returned: " + str(dateObj) + "\n"

            elif dates[i] is None:
                if (dateObj is None):
                    correct += 1
                else:
                    string += "Incorrect Match! " + urls[i] + "\n" + \
                     "Date expected: " + str(dates[i]) + "\n" + \
                     "Date returned: " + str(dateObj.date()) + "\n"

            elif (dateObj is not None) and (dates[i] is not None):
                if (dateObj.date() == dates[i].date()):
                    correct += 1
                else:
                    string += "Incorrect Match! " + urls[i] + "\n" + \
                     "Date expected: " + str(dates[i].date()) + "\n" + \
                     "Date returned: " + str(dateObj.date()) + "\n"
            else:
                string += "Incorrect Match! " + urls[i] + "\n" + \
                 "Date expected: " + str(dates[i].date()) + "\n" + \
                 "Date returned: " + str(dateObj.date()) + "\n"

        print(string)
        color = "articleDateExtractor had this many Correct number of dates: "\
            + str(correct) + " out of " + str(len(dates))

        print(colored(color, 'red'))

        self.assertTrue(correct, len(urls))

    dateGuesserVAR = test_dateGuesser
    articleDateExtractorVAR = test_articleDateExtractor

if __name__ == '__main__':
    unittest.main()
