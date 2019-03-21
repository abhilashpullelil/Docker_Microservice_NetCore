#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

FROM microsoft/dotnet:2.1-aspnetcore-runtime-nanoserver-1803 AS base
WORKDIR /app
EXPOSE 50776
EXPOSE 44307

FROM microsoft/dotnet:2.1-sdk-nanoserver-1803 AS build
WORKDIR /src
COPY ["sample_microservice/sample_microservice.csproj", "sample_microservice/"]
RUN dotnet restore "sample_microservice/sample_microservice.csproj"
COPY . .
WORKDIR "/src/sample_microservice"
RUN dotnet build "sample_microservice.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "sample_microservice.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "sample_microservice.dll"]