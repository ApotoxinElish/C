#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>

void main(void)
{
    printf("Process ID: %ld\n", (long)getpid());
    printf("Parent Process ID: %ld\n", (long)getppid());
}