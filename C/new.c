#include <stdio.h>

int main()
{
    double i;
    for (i = 0.1; i != 1.0; i += 0.1)
    {
        printf("%f\n", i);
    }
}