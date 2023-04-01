
#define _CRT_SECURE_NO_WARNINGS 

#include <iostream>
#include <conio.h>

// simpler but less polished than input2()
std::string input1()
{
    std::string ret;

    for(;;) {
        int c = getchar();
        if(c == '\n')
            break;

        if((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9'))
            ret += (char)c;
    }
    return ret;
}

// used by input2
std::string g_lastLine;

// Note: This function does not work correctly when the line is wrapped around.
// see https://superuser.com/questions/1474301/cannot-backspace-across-wrapped-lines-in-terminal
std::string input2()
{
    std::string ret;

    printf("> ");

    for (;;) {
        int c = _getch();
        if (c == 13)
            break;

        if(c == 8 && !ret.empty())
        {
            ret.resize(ret.size() - 1);
            // backspace one character
            printf("%c %c", 8, 8);
        }
        // special keys e.g. cursor keys
        if(c == 224) {
            c = _getch();

            if(c == 'H') {
                // clear line
                for(int i = 0; i < (int)ret.size(); ++i)
                    printf("%c %c", 8, 8);

                ret = g_lastLine;
                printf("%s", ret.c_str());
                continue;
            }

            // put a breakpoint in next line to find what special key was pressed
            continue;
        }

        if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9') || c == ' ')
        {
            ret += (char)c;
            printf("%c", c);
        }

        // put a breakpoint in next line to find what key was pressed
        continue;
    }

    if(!ret.empty())
        g_lastLine = ret;

    printf("\n");
    return ret;
}

// only works with A..Z a..z
// @param inout is changed in place
void makeLower(std::string &inout) {
    for(char* p = &inout[0]; *p; ++p) 
    {
        if(*p >= 'A' && *p <= 'Z')
        {
            *p = *p - 'A' + 'a';
        }
    }
}

void parseWhitespace(const char* &p) {
    // todo: refine what is whitespace
    while(*p ==' ' || *p == '\t')
        ++p;
}

void processInput(const char* line) {
    const char* p = line;

    while(*p)
    {
        parseWhitespace(p);
        
    }
}

int main()
{
    // https://stackoverflow.com/questions/1716296/why-does-printf-not-flush-after-the-call-unless-a-newline-is-in-the-format-strin
    setbuf(stdout, NULL);

    printf("'quit' to quit the app\n\n");

    for(;;) 
    {
        std::string str = input2();

        makeLower(str);

        printf("This is what you wrote: '%s'\n", str.c_str());

        processInput(str.c_str());

        if(str == "quit")
            break;
    }

    printf("\n       <Press any key>");
    _getch();
    printf("\n\n");
}
