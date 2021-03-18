import requests
import articleDateExtractor
from date_guesser import guess_date, Accuracy
import sys
import os


def dateGuesser(urlParam):
    # Uses url slugs when available
    guess = guess_date(url=urlParam, html=requests.get(urlParam).text)

    #  Returns a Guess object with three properties
    return guess


def articleDateExtractorFunc(urlParam):
    old_stdout = sys.stdout  # backup current stdout
    sys.stdout = open(os.devnull, "w")
    date = articleDateExtractor.extractArticlePublishedDate(urlParam)
    sys.stdout.close()
    sys.stdout = old_stdout  # reset old stdout
    return date

if __name__ == '__main__':
    # url = "https://www.dw.com/uk/коментар-націоналізм-родом-зі-східної-європи/a-42081385"
    url = "http://edition.cnn.com/2015/11/28/opinions/sutter-cop21-paris-preview-two-degrees/index.html"
    # dateObj = dateGuesser(url)
    # print(dateObj.date)
    # print(dateObj.accuracy)
    # print(dateObj.method)
    date = articleDateExtractorFunc(url)
    print(date)
    print(date.date())
